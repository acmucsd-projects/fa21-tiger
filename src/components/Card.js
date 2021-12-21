import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { colours, shadows } from '../styles'

/**
 * Those, like, translucent cards in the Figma.
 *
 * Props:
 * - `style` - extra styles to add to the card (optional)
 * - `children` - card content
 * - `left` - content to make on the left side of the card, like those circular thingies (optional)
 * - `right` - content on the right side, like the arrow (optional)
 * - `onPress` - what to do when the card is pressed (optional)
 */
export function Card ({ style, flexStyle, children, left, right, onPress }) {
  const MaybePressable = onPress ? TouchableOpacity : View
  return (
    <MaybePressable
      style={[colours.cardBacking, styles.card, shadows.smallShadow, style]}
      onPress={onPress}
    >
      {left}
      <View style={[styles.content, flexStyle]}>{children}</View>
      {right}
    </MaybePressable>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flex: 1
  }
})
