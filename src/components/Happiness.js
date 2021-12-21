import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colours, shadows, text } from '../styles'

export function Happiness ({ happiness }) {
  return (
    <View style={[styles.icon, colours.positive, shadows.smallShadow]}>
      <Text style={[text.title, colours.whiteTextOnBacking]}>{happiness}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
