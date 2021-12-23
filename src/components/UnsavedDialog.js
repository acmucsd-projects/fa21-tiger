import React, { createContext, useContext, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colours, shadows, text, white } from '../styles'
import { ShadedOverlay } from './ShadedOverlay'

export const UnsavedDialogContext = createContext({
  exitAction: null,
  setExitAction: () => {
    throw new Error(
      'Context provider was not given, so useContext is using the default value.'
    )
  }
})

export function UnsavedDialog ({ onCancel, onExit }) {
  return (
    <ShadedOverlay onClose={onCancel} wrapperStyle={styles.overlayWrapper}>
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
              <Path d='M 2 18 L 18 2 M 2 2 L 18 18' />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, colours.danger, shadows.smallShadow]}
            onPress={onExit}
          >
            <Text style={[colours.whiteTextOnBacking, text.body]}>
              Exit Without Saving
            </Text>
            <Svg
              width={20}
              height={20}
              viewBox='0 0 20 20'
              stroke={white}
              strokeWidth={3}
              strokeLinecap='round'
            >
              <Path d='M18 10.5L14.2619 14.2381 M18 10.5L14.3064 6.80637 M2 2.5L2 18.5 M2 2.5H10 M2 18.5H10 M18 10.5H10' />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </ShadedOverlay>
  )
}

export function CheckUnsavedChanges ({ navigation, hasUnsavedChanges }) {
  const { setExitAction } = useContext(UnsavedDialogContext)

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

  return null
}

const styles = StyleSheet.create({
  overlayWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
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
