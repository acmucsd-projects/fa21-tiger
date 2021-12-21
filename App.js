import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import {
  useFonts,
  PTSans_400Regular,
  PTSans_700Bold
} from '@expo-google-fonts/pt-sans'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './src/views/Home'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Journal } from './src/views/Journal'
import { Details } from './src/views/Details'
import { EditEntry } from './src/views/EditEntry'
import {
  UnsavedDialog,
  UnsavedDialogContext
} from './src/components/UnsavedDialog'

const Stack = createNativeStackNavigator()

export default function App () {
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

  const [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSans_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
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
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Journal' component={Journal} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='EditEntry' component={EditEntry} />
          </Stack.Navigator>
        </NavigationContainer>
      </UnsavedDialogContext.Provider>
    </SafeAreaProvider>
  )
}
