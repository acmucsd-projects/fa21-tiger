import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colours, primary, shadows } from '../styles'

export function MenuButton ({ style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[colours.backing, shadows.smallShadow, styles.button, style]}
      >
        <Svg
          width={26}
          height={24}
          viewBox='0 0 26 24'
          stroke={primary}
          strokeWidth={4}
          strokeLinecap='round'
        >
          <Path d='M 2 2 H 24 M 2 12 H 24 M 2 22 H 24' />
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
