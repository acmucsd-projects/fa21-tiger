import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { colours, lightBacking, shadows, text } from '../styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackButton } from '../buttons/BackButton'
import { CreateButton } from '../buttons/CreateButton'
import { MenuButton } from '../buttons/MenuButton'
import { UnsavedDialog, UnsavedDialogContext } from './UnsavedDialog'
import { CreateMenu } from './CreateMenu'

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
 * - `navigation` - React Native navigation gives each view a `navigation` prop.
 *   Give it to BaseView so that its back button works
 * - `title` - text to show in the title bar (optional - if omitted, there is no
 *   title bar)
 * - `action` - thing to show on top right, maybe a done button or edit button
 *   (optional)
 * - `hideBottomButtons` (false by default) - whether to hide the menu and
 *   create buttons at the bottom
 * - `noPadding` (false by default) - whether to include padding around the
 *   content
 * - `contentStyle` - other styles to apply to the content view
 * - `children` - content of view
 */
export function BaseView ({
  navigation,
  title,
  action,
  hideBottomButtons = false,
  noPadding = false,
  contentStyle,
  children
}) {
  // This is kind of scuffed but position: fixed isn't supported by React Native
  // apparently
  const setExitAction = exitAction => {
    setUnsavedDialogContextValue(({ setExitAction }) => ({
      exitAction,
      setExitAction
    }))
  }
  const [unsavedDialogContextValue, setUnsavedDialogContextValue] = useState({
    exitAction: null,
    setExitAction
  })

  const [showingCreateMenu, setShowingCreateMenu] = useState(false)

  // SafeAreaView doesn't take into account where it's actually used, so if the
  // title bar is claiming the top padding, then it'd repeat the padding for
  // content.
  const ContentView = title ? View : SafeAreaView
  return (
    <View style={[colours.whiteTextOnBacking, text.body, styles.wrapper]}>
      <LinearGradient colors={lightBacking} style={styles.background} />
      {title && (
        <TitleBar
          title={title}
          action={action}
          onBack={() => {
            navigation.goBack()
          }}
        />
      )}
      {unsavedDialogContextValue.exitAction && (
        <UnsavedDialog
          onCancel={() => {
            setExitAction(null)
          }}
          onExit={() => {
            unsavedDialogContextValue.exitAction()
            setExitAction(null)
          }}
        />
      )}
      <UnsavedDialogContext.Provider value={unsavedDialogContextValue}>
        <ContentView
          style={[
            styles.content,
            !noPadding && styles.contentPadding,
            contentStyle
          ]}
        >
          {children}
        </ContentView>
      </UnsavedDialogContext.Provider>
      {!hideBottomButtons && (
        <>
          <MenuButton style={[styles.bottomButton, styles.menu]} />
          <CreateButton
            style={[styles.bottomButton, styles.create]}
            onPress={() => setShowingCreateMenu(true)}
          />
        </>
      )}
      {showingCreateMenu && (
        <CreateMenu
          onClose={() => setShowingCreateMenu(false)}
          onNewJournal={() => {
            setShowingCreateMenu(false)
            navigation.reset({
              index: 2,
              routes: [
                { name: 'Home' },
                { name: 'Journal' },
                { name: 'EditEntry', params: {} }
              ]
            })
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  titleBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15
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
    flex: 1
  },
  contentPadding: {
    padding: 15
  },

  bottomButton: {
    position: 'absolute',
    bottom: 15
  },
  menu: {
    left: 15
  },
  create: {
    right: 15
  }
})
