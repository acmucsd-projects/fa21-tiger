import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { colours, lightBacking, shadows, text } from '../styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackButton } from '../buttons/BackButton'

function TitleBar ({ title, action, onBack }) {
  return (
    <SafeAreaView
      style={[colours.backing, shadows.smallShadow, styles.titleBar]}
    >
      <BackButton onPress={onBack} />
      <Text style={[colours.text, text.title, styles.title]}>{title}</Text>
      {/* Insert placeholder if no action button; may have to resize this for that ELONGATED done button */}
      {action ?? <View style={{ width: 40 }}></View>}
    </SafeAreaView>
  )
}

/**
 * Template for each view that provides a title bar
 *
 * - `title` - text to show in the title bar
 * - `action` - thing to show on top right, maybe a done button or edit button
 * - `children` - content of view
 */
export function BaseView ({ title, action, children }) {
  return (
    <View style={[colours.whiteTextOnBacking, text.body, styles.wrapper]}>
      <LinearGradient colors={lightBacking} style={styles.background} />
      {title && <TitleBar title={title} action={action} onBack={console.log} />}
      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  titleBar: {
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15
  },
  title: {
    marginHorizontal: 'auto'
  },

  wrapper: {
    flex: 1
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  content: {
    padding: 15
  }
})
