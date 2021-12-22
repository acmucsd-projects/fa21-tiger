import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colours, primary, shadows } from '../styles'

export function CreateButton ({ style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[colours.backing, shadows.smallShadow, styles.button, style]}
      >
        <Svg
          width={30}
          height={30}
          viewBox='0 0 30 30'
          stroke={primary}
          strokeWidth={4}
          strokeLinecap='round'
        >
          <Path d='M 2 15 L 28 15 M 15 2 L 15 28' />
        </Svg>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  }
})
