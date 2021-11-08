import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { colours, lightBacking, text } from '../styles'

export function BaseView ({ title, children }) {
  return (
    <View style={[colours.whiteTextOnBacking, text.body, styles.wrapper]}>
      <LinearGradient colors={lightBacking} style={styles.background} />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})
