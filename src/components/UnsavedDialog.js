import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Svg, { Line } from 'react-native-svg'
import { colours, shadows, text, white } from '../styles'

export function UnsavedDialog ({}) {
  return (
    <View style={[styles.background, colours.overlayBackground]}>
      <View style={[styles.dialog, colours.backing, shadows.smallShadow]}>
        <Text style={[text.subtitle]}>Heads up!</Text>
        <Text style={[styles.body, text.body]}>
          Unsaved changes will be lost.
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, colours.greyOnWhite, shadows.smallShadow]}
          >
            <Text style={[colours.whiteTextOnBacking, text.body]}>Cancel</Text>
            <Svg
              viewBox='0 0 20 20'
              width={20}
              height={20}
              stroke={white}
              strokeWidth={3}
              strokeLinecap='round'
            >
              <Line x1={2} y1={18} x2={18} y2={2} />
              <Line x1={2} y1={2} x2={18} y2={18} />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, colours.danger, shadows.smallShadow]}
          >
            <Text style={[colours.whiteTextOnBacking, text.body]}>
              Exit Without Saving
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
  dialog: {
    width: 303,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15
  },
  body: {
    marginVertical: 5
  },
  buttons: {
    padding: 5,
    paddingTop: 0,
    alignSelf: 'stretch'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
