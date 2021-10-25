import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, PTSans_400Regular, PTSans_700Bold } from '@expo-google-fonts/pt-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/views/Home';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { text } from './src/styles';
import { NavBar } from './src/components/NavBar';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    PTSans_400Regular, PTSans_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTitleStyle: text.title,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white' },
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <NavBar views={[
      { label: 'Home' },
      { label: 'Mood' },
      { label: 'Tasks' },
      { label: 'Analytics' },
    ]} onSelect={() => {}}></NavBar>
  </>
}
