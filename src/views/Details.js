import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BaseView } from '../components/BaseView'
import { colours, text } from '../styles'
import { Card } from '../components/Card'
import { ArrowIcon } from '../buttons/ArrowIcon'
import { EditButton } from '../buttons/EditButton'
import { Happiness } from '../components/Happiness'

export function Details ({ navigation }) {
  return (
    <BaseView
      title='Entry Details'
      navigation={navigation}
      action={
        <EditButton
          onPress={() => {
            navigation.navigate('EditEntry')
          }}
        />
      }
    >
      <Card style={styles.card} left={<Happiness happiness={8} />}>
        <Text style={[text.subtitle, colours.text]}>Happy</Text>
        <Text style={[text.body, colours.text]}>Today at 12:11pm</Text>
      </Card>
      <Card style={styles.content}>
        <Text style={[text.body, colours.text]}>
          I’m feeling really great today! I finished all of my chores early and
          got a lot of extra time to work on my designs. I hope I can do this
          more often, it’s nice to have more time for my projects!
        </Text>
      </Card>
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
