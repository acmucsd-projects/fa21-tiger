import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Svg, { Line, Path } from 'react-native-svg'
import { colours, primary, shadows, textColour } from '../styles'

function PlusMinusButton ({ onPress, isPlus }) {
  return (
    <TouchableOpacity
      style={[shadows.smallShadow, colours.backing, styles.button]}
      onPress={onPress}
    >
      <Svg
        viewBox='0 0 35 35'
        width={35}
        height={35}
        stroke={primary}
        strokeWidth={4}
        strokeLinecap='round'
      >
        <Line x1={9} y1={17.5} x2={26} y2={17.5} />
        {isPlus && <Line x1={17.5} y1={9} x2={17.5} y2={26} />}
      </Svg>
    </TouchableOpacity>
  )
}

export function PlusButton ({ onPress }) {
  return (
    <PlusMinusButton onPress={onPress} isPlus={true} />
  )
}

export function MinusButton ({ onPress }) {
  return (
    <PlusMinusButton onPress={onPress} isPlus={false} />
  )
}

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    borderRadius: 35
  }
})
