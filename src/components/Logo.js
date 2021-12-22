import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colours, secondary, text } from '../styles'

/**
 * NOTE: The logo used in the design mockups are scaled up by 55/39.
 */
export function Logo ({ style }) {
  return (
    <View style={[styles.wrapper, style]}>
      <Svg width={11} height={21} viewBox='0 0 11 21' fill={secondary}>
        <Path d='M11 6C11 2.68629 8.31371 0 5 0H0V5C0 8.31371 2.68629 11 6 11H10.4697L4.73483 5.26517C4.58839 5.11872 4.58839 4.88128 4.73483 4.73484C4.88128 4.58839 5.11872 4.58839 5.26516 4.73484L11 10.4697L11 6Z' />
        <Path d='M10.6464 13H8C5.23858 13 3 15.2386 3 18V21H6C8.76142 21 11 18.7614 11 16V13.3536L7.17678 17.1768C7.07915 17.2744 6.92085 17.2744 6.82322 17.1768C6.72559 17.0791 6.72559 16.9209 6.82322 16.8232L10.6464 13Z' />
      </Svg>
      <Text style={[text.title, colours.whiteTextOnBacking, styles.text]}>
        Menta
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 1
  }
})
