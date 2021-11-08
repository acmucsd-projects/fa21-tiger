import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Svg, { Line } from 'react-native-svg'
import { textColour } from '../styles'

/**
 * The < icon button in the Figma
 */
export function BackButton ({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg
        viewBox='0 0 40 40'
        width={40}
        height={40}
        strokeWidth={3}
        stroke={textColour}
        strokeLinecap='round'
      >
        <Line x1={14} y1={20} x2={25} y2={9} />
        <Line x1={14} y1={20} x2={25} y2={31} />
      </Svg>
    </TouchableOpacity>
  )
}
