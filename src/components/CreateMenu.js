import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { colours, primary, text } from '../styles'
import { ShadedOverlay } from './ShadedOverlay'

export function CreateMenu ({ onClose, onNewTask, onNewJournal }) {
  return (
    <ShadedOverlay onClose={onClose} wrapperStyle={styles.overlayWrapper}>
      {onNewTask && (
        <TouchableOpacity style={styles.createOption} onPress={onNewTask}>
          <Text style={[colours.whiteTextOnBacking, text.subtitle]}>
            New Task
          </Text>
          <View style={[colours.backing, styles.icon]}>
            <Svg
              width={30}
              height={30}
              viewBox='0 0 30 30'
              stroke={primary}
              strokeWidth={4}
              strokeLinecap='round'
            >
              <Path d='M23 2V12 M28 7L18 7 M28 7L18 7 M11 7L2 7 M2 28L2 7 M23 28L23 19 M23 28L2 28' />
            </Svg>
          </View>
        </TouchableOpacity>
      )}
      {onNewJournal && (
        <TouchableOpacity style={styles.createOption} onPress={onNewJournal}>
          <Text style={[colours.whiteTextOnBacking, text.subtitle]}>
            New Journal Entry
          </Text>
          <View style={[colours.backing, styles.icon]}>
            <Svg
              width={30}
              height={30}
              viewBox='0 0 30 30'
              stroke={primary}
              strokeWidth={4}
              strokeLinecap='round'
            >
              <Path d='M23 2V12 M28 7L18 7 M28 7L18 7 M11 7L2 7 M2 28L2 7 M23 28L23 19 M23 28L2 28' />
            </Svg>
          </View>
        </TouchableOpacity>
      )}
    </ShadedOverlay>
  )
}

const styles = StyleSheet.create({
  overlayWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15
  },
  createOption: {
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row'
  },
  // Interestingly, the icons for the create menu don't have shadows
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12
  }
})
