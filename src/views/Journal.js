import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BaseView } from '../components/BaseView'
import { colours, text } from '../styles'
import { Card } from '../components/Card'
import { ArrowIcon } from '../buttons/ArrowIcon'
import { Happiness } from '../components/Happiness'

export function Journal ({ navigation }) {
  return (
    <BaseView title='My Journal' navigation={navigation}>
      <Text style={[text.subtitle, colours.whiteTextOnBacking]}>
        Welcome back!
      </Text>
      <Text style={[text.body, colours.whiteTextOnBacking]}>
        Feel free to write about your thoughts and feelings here anytime you
        want.
      </Text>
      <Card
        style={styles.card}
        right={<ArrowIcon />}
        onPress={() => {
          navigation.navigate('EditEntry')
        }}
      >
        <Text style={[text.subtitle, colours.text]}>Start a new entry</Text>
        <Text style={[text.body, colours.text]}>
          How are you feeling today?
        </Text>
      </Card>
      <Card
        style={styles.card}
        left={<Happiness happiness={8} />}
        onPress={() => {
          navigation.navigate('Details')
        }}
      >
        <Text style={[text.subtitle, colours.text]}>Happy</Text>
        <Text style={[text.body, colours.text]}>Today at 12:11pm</Text>
      </Card>
      <Text style={[text.detail, colours.whiteTextOnBacking, styles.hint]}>
        Tap a card to view or edit an entry.
      </Text>
    </BaseView>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10
  },
  hint: {
    textAlign: 'center',
    marginTop: 10
  }
})
