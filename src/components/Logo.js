import React from 'react'
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Svg, { Circle, Line, Polyline, Text } from 'react-native-svg'
import { greyOnWhite, primary, textColour } from '../styles'

/**
 * The -> icon on the cards
 */
export function Logo () {
  return (
    <Svg viewBox='0 0 40 40' width={40} height={40}>
      <Circle fill='#E1E1E1' cx={20} cy={20} r={20} />
      <Text x={7} y={11}>
        Icon
      </Text>
    </Svg>
  )
}
