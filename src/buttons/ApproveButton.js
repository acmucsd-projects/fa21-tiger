import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Svg, { Line } from 'react-native-svg'
import { colours, shadows, white } from '../styles'

/**
 * The < icon button in the Figma
 */
export function ApproveButton ({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, colours.primary, shadows.smallShadow]}>
      <Svg
        viewBox='0 0 26.67 20'
        width={26.67}
        height={20}
        strokeWidth={2.5}
        stroke={white}
        strokeLinecap='round'
      >
        <Line x1={1.77} y1={10.48} x2={9.52} y2={18.23} />
        <Line x1={24.9} y1={2.86} x2={9.52} y2={18.23} />
      </Svg>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
