import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BaseView } from '../components/BaseView'
import { colours, text } from '../styles'
import { Card } from '../components/Card'
import { ArrowIcon } from '../buttons/ArrowIcon'
import { EditButton } from '../buttons/EditButton'
import { Happiness } from '../components/Happiness'
import { get } from '../sid/Journals'

/**
 * Journal entry details.
 */
export function Details ({ route, navigation }) {
  const { journalId } = route.params
  const [journal, setJournal] = useState(null)

  useEffect(() => {
    get(journalId).then(setJournal)
  }, [])

  return (
    <BaseView
      title='Entry Details'
      navigation={navigation}
      action={
        journal && (
          <EditButton
            onPress={() => {
              navigation.navigate('EditEntry', {
                journalId,
                initJournalData: journal
              })
            }}
          />
        )
      }
    >
      {journal ? (
        <>
          <Card
            style={styles.card}
            left={<Happiness happiness={journal.moodIntensity} />}
          >
            <Text style={[text.subtitle, colours.text]}>{journal.mood}</Text>
            <Text style={[text.body, colours.text]}>
              {journal.created.toLocaleString()}
            </Text>
          </Card>
          <Card style={styles.content}>
            <Text style={[text.body, colours.text]}>{journal.description}</Text>
          </Card>
        </>
      ) : (
        <Text style={[text.detail, colours.whiteTextOnBacking, styles.hint]}>
          Loading journal...
        </Text>
      )}
    </BaseView>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10
  },
  content: {
    padding: 10
  }
})
