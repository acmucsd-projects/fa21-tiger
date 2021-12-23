import React, { useCallback, useContext, useRef, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native'
import { BaseView } from '../components/BaseView'
import { colours, greyOnWhite, shadows, text } from '../styles'
import { Card } from '../components/Card'
import { ArrowIcon } from '../buttons/ArrowIcon'
import { ApproveButton } from '../buttons/ApproveButton'
import { TextArea } from '../components/TextArea'
import { MinusButton, PlusButton } from '../buttons/PlusMinusButtons'
import { DropdownIcon } from '../buttons/DropdownIcon'
import { CheckUnsavedChanges } from '../components/UnsavedDialog'
import { SidContext } from '../sid/Sid'

function parseRawIntensity (rawIntensity, intensity) {
  if (!rawIntensity || !Number.isFinite(+rawIntensity)) {
    return intensity
  } else {
    return Math.min(Math.max(Math.round(+rawIntensity), 1), 10)
  }
}

/**
 * Journal entry editor.
 */
export function EditEntry ({ route, navigation }) {
  const {
    journalId,
    initJournalData = { mood: 'Happy', intensity: 5, description: '' }
  } = route.params

  const sid = useContext(SidContext)
  const [mood, setMood] = useState(initJournalData.mood)
  const [intensity, setIntensity] = useState(initJournalData.intensity)
  const [rawIntensity, setRawIntensity] = useState(null)
  const [description, setDescription] = useState(initJournalData.description)

  const unsavedChanges =
    mood !== initJournalData.mood ||
    rawIntensity !== null || // Don't save if there is still unprocessed numbers in the intensity
    intensity !== initJournalData.intensity ||
    description !== initJournalData.description
  // Kind of hacky way to make it not show the dialog after pressing save/delete
  const canExit = useRef(false)
  const hasUnsavedChanges = useCallback(() => {
    return unsavedChanges && !canExit.current
  }, [unsavedChanges])

  return (
    <BaseView
      title='Edit Entry'
      navigation={navigation}
      action={
        <ApproveButton
          onPress={async () => {
            canExit.current = true
            await sid.journals.save(
              {
                mood,
                moodIntensity: parseRawIntensity(rawIntensity, intensity),
                description
              },
              journalId
            )
            // In the Figma, saving an entry takes you to the journal list
            // rather than the journal details page.
            navigation.navigate('Journal')
          }}
        />
      }
      hideBottomButtons
    >
      <CheckUnsavedChanges
        navigation={navigation}
        hasUnsavedChanges={hasUnsavedChanges}
      />
      <Card
        style={styles.card}
        right={<DropdownIcon />}
        onPress={() => {
          console.log('DROPDOWN')
          Alert.alert('wow', 'lol wee')
        }}
      >
        <Text style={[text.body, colours.text]}>What’s your mood?</Text>
      </Card>
      <Card style={styles.card} flexStyle={styles.intensity}>
        <Text style={[text.body, colours.text]}>
          How intense is that mood? (1-10)
        </Text>
        <View style={styles.selector}>
          <MinusButton
            onPress={() => {
              setIntensity(intensity => Math.max(intensity - 1, 1))
            }}
          />
          <TextInput
            value={rawIntensity ?? intensity.toString()}
            onChange={({ nativeEvent: { text } }) => {
              setRawIntensity(text.replace(/\D/g, ''))
            }}
            onBlur={() => {
              setIntensity(intensity => {
                setRawIntensity(null)
                return parseRawIntensity(rawIntensity, intensity)
              })
            }}
            keyboardType='number-pad'
            style={[
              styles.mood,
              text.subtitle,
              colours.text,
              colours.backing,
              shadows.smallShadow
            ]}
          />
          <PlusButton
            onPress={() => {
              setIntensity(intensity => Math.min(intensity + 1, 10))
            }}
          />
        </View>
      </Card>
      <Card style={[styles.card, styles.content]}>
        <Text style={[text.body, colours.text]}>Description</Text>
        <TextArea
          style={[styles.textArea, text.body, colours.text, colours.backing]}
          borderVertical={2}
          value={description}
          onChange={({ nativeEvent: { text } }) => setDescription(text)}
        />
      </Card>
      {journalId && (
        <Card
          style={styles.card}
          right={<ArrowIcon />}
          onPress={async () => {
            canExit.current = true
            await sid.journals.delete(journalId)
            navigation.navigate('Journal')
          }}
        >
          <Text style={[text.body, colours.text]}>Delete Entry</Text>
        </Card>
      )}
    </BaseView>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10
  },
  moodRate: {
    padding: 10,
    paddingTop: 5
  },
  textArea: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: greyOnWhite,
    borderWidth: 1,
    borderRadius: 15
  },
  intensity: {
    alignItems: 'center'
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mood: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 70,
    textAlign: 'center',
    borderRadius: 15,
    marginHorizontal: 10
  }
})
