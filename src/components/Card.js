import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colours, shadows } from '../styles'

export function Card ({ style, children }) {
  return (
    <View style={[colours.cardBacking, styles.card, shadows.smallShadow, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 15
  }
})
