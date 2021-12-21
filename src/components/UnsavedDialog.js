import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import Svg, { Line } from 'react-native-svg'
import { colours, shadows, text, white } from '../styles'
import { useAndroidBackCancel } from '../utils'

export const UnsavedDialogContext = createContext({
  exitAction: null,
  setExitAction: () => {}
})

export function UnsavedDialog ({ onCancel, onExit }) {
  return (
    <View style={[styles.wrapper]}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={[styles.background, colours.overlayBackground]} />
      </TouchableWithoutFeedback>
      <View style={[styles.dialog, colours.backing, shadows.smallShadow]}>
        <Text style={[text.subtitle]}>Heads up!</Text>
        <Text style={[styles.body, text.body]}>
          Unsaved changes will be lost.
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, colours.greyOnWhite, shadows.smallShadow]}
            onPress={onCancel}
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
            onPress={onExit}
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

export function useUnsavedChanges (navigation, hasUnsavedChanges) {
  const { exitAction, setExitAction } = useContext(UnsavedDialogContext)

  // https://reactnavigation.org/docs/preventing-going-back
  useEffect(() => {
    const handleBeforeRemove = e => {
      if (hasUnsavedChanges()) {
        e.preventDefault()
        setExitAction(() => {
          navigation.dispatch(e.data.action)
        })
      }
    }
    navigation.addListener('beforeRemove', handleBeforeRemove)
    return () => {
      navigation.removeListener('beforeRemove', handleBeforeRemove)
    }
  }, [navigation, hasUnsavedChanges])

  useAndroidBackCancel(exitAction, () => setExitAction(null))
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh'
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
