import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BaseView } from '../components/BaseView'
import { colours, text } from '../styles'
import { Card } from '../components/Card'
import { ArrowIcon } from '../buttons/ArrowIcon'
import { Logo } from '../components/Logo'
import { UnsavedDialog } from '../components/UnsavedDialog'

export function Home ({ navigation }) {
  return (
    <BaseView navigation={navigation}>
      <UnsavedDialog />
      <View style={[styles.topBar]}>
        <Logo />
        <Text style={[text.title, colours.whiteTextOnBacking, styles.title]}>Menta</Text>
      </View>
      <Text style={[text.subtitle, colours.whiteTextOnBacking]}>
        Good morning, Tony!
      </Text>
      <Text style={[text.body, colours.whiteTextOnBacking]}>
        Ready to take on the world?
      </Text>
      <Card
        style={styles.card}
        right={<ArrowIcon />}
        onPress={() => {
          navigation.navigate('Journal')
        }}
      >
        <Text style={[text.subtitle, colours.text]}>View my journal</Text>
        <Text style={[text.body, colours.text]}>
          Write freely about your thoughts
        </Text>
      </Card>
      <Card style={styles.card}>
        <Text style={[text.subtitle, colours.text]}>Sleep 8 Hours</Text>
        <Text style={[text.body, colours.text]}>7h 30m today • Streak: 0</Text>
      </Card>
      <Text style={[text.detail, colours.whiteTextOnBacking, styles.hint]}>
        Swipe left to skip • Swipe right to complete
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
  },
  topBar: {
    flexDirection: 'row',
    marginBottom: 30
  },
  title: {
    marginLeft: 15
  }
})
