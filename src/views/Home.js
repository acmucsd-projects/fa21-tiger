import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BaseView } from '../components/BaseView'

export function Home ({ navigation }) {
  return (
    <BaseView title="Home">
      <Text>hello i am home</Text>
    </BaseView>
  )
}
