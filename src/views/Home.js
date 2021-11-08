import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BaseView } from '../components/BaseView'
import { colours, text } from '../styles'
import { Card } from '../components/Card'

export function Home ({ navigation }) {
  return (
    <BaseView title="Home">
      <Text style={[text.subtitle, colours.whiteTextOnBacking]}>Good morning, Tony!</Text>
      <Text style={[text.body, colours.whiteTextOnBacking]}>Ready to take on the world?</Text>
      <Card style={styles.card}>
        <Text style={[text.subtitle, colours.text]}>View my journal</Text>
        <Text style={[text.body, colours.text]}>Write freely about your thoughts</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={[text.subtitle, colours.text]}>Sleep 8 Hours</Text>
        <Text style={[text.body, colours.text]}>7h 30m today • Streak: 0</Text>
      </Card>
    </BaseView>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10
  }
})
