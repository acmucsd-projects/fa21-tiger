import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { colours } from '../styles'
import { useAndroidBackCancel } from '../utils'

export function ShadedOverlay ({ wrapperStyle, onClose, children }) {
  useAndroidBackCancel(true, onClose)
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.background, colours.overlayBackground]} />
      </TouchableWithoutFeedback>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
})
