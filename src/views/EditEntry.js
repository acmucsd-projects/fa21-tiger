import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BaseView } from '../components/BaseView'
import { colours, greyOnWhite, shadows, text } from '../styles'
import { Card } from '../components/Card'
import { ArrowIcon } from '../buttons/ArrowIcon'
import { ApproveButton } from '../buttons/ApproveButton'
import { TextArea } from '../components/TextArea'
import { MinusButton, PlusButton } from '../buttons/PlusMinusButtons'
import { DropdownIcon } from '../buttons/DropdownIcon'

export function EditEntry ({ navigation }) {
  const [value, setValue] = useState(
    'I’m feeling really great today! I finished all of my chores early and got a lot of extra time to work on my designs. I hope I can do this more often, it’s nice to have more time for my projects!'
  )

  return (
    <BaseView
      title='Edit Entry'
      navigation={navigation}
      action={
        <ApproveButton
          onPress={() => {
            navigation.navigate('Details')
          }}
        />
      }
    >
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
          <MinusButton />
          <TextInput
            value='5'
            keyboardType='number-pad'
            style={[
              styles.mood,
              text.subtitle,
              colours.text,
              colours.backing,
              shadows.smallShadow
            ]}
          />
          <PlusButton />
        </View>
      </Card>
      <Card style={[styles.card, styles.content]}>
        <Text style={[text.body, colours.text]}>Description</Text>
        <TextArea
          style={[styles.textArea, text.body, colours.text, colours.backing]}
          borderVertical={2}
          value={value}
          onChange={({ nativeEvent: { text } }) => setValue(text)}
        />
      </Card>
      <Card
        style={styles.card}
        right={<ArrowIcon />}
        onPress={() => {
          console.log('DELETE lol')
        }}
      >
        <Text style={[text.body, colours.text]}>Delete Entry</Text>
      </Card>
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
