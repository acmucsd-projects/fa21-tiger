import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BaseView } from '../components/BaseView'
import { colours, text } from '../styles'
import { Card } from '../components/Card'
import { ArrowIcon } from '../buttons/ArrowIcon'

export function EditEntry ({ navigation }) {
  return (
    <BaseView title='Edit Entry' navigation={navigation}>
      <Card style={styles.card}>
        <Text style={[text.body, colours.text]}>What’s your mood?</Text>
      </Card>
      <Card style={[styles.card, styles.content]}>
        <Text style={[text.body, colours.text]}>
          I’m feeling really great today! I finished all of my chores early and
          got a lot of extra time to work on my designs. I hope I can do this
          more often, it’s nice to have more time for my projects!
        </Text>
      </Card>
      <Card style={styles.card} right={<ArrowIcon />}>
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
  }
})
