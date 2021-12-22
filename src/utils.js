// @ts-check

import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'
import { BackHandler } from 'react-native'

/**
 * Cancels the default Android back button behaviour. For example, if there's a
 * dialogue covering the screen, the back button should close it rather than
 * also going to the previous view.
 *
 * @param {boolean} cancel Whether to cancel the default Android back button
 * behaviour.
 * @param {() => {}} onCancel A handler for when the back button is cancelled.
 * NOTE: This is likely going to have stale values because it is not listed as a
 * dependency for useCallback.
 * @see https://reactnavigation.org/docs/custom-android-back-button-handling
 */
export function useAndroidBackCancel (cancel, onCancel) {
  // TODO: I haven't tested this code
  useFocusEffect(
    useCallback(() => {
      if (cancel) {
        const handleBackPress = () => {
          onCancel()
          return true
        }
        BackHandler.addEventListener('hardwareBackPress', handleBackPress)
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
        }
      }
    }, [cancel])
  )
}

/**
 * Re-renders the component when the screen gets back into focus. This is a hack
 * because React Native Navigation, for some reason, doesn't do that, so the
 * useEffect dependency list doesn't get refreshed.
 *
 * @param
 * {import('@react-navigation/native-stack').NativeStackScreenProps<unknown>['navigation']}
 * navigation
 */
export function useRerenderOnFocus (navigation) {
  const [, setDummy] = useState(0)

  useEffect(() => {
    const unsubscriber = navigation.addListener('focus', () => {
      // Trigger a re-render by changing the state.
      setDummy(value => value + 1)
    })
    return unsubscriber
  }, [navigation])
}
