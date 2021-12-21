// @ts-check

import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
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
