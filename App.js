import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, PTSans_400Regular, PTSans_700Bold } from '@expo-google-fonts/pt-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/views/Home';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { text } from './src/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

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
      <Tab.Navigator initialRouteName="Home" screenOptions={{
        headerTitleStyle: text.title,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          return <View style={{ width: size, height: size, backgroundColor: color}}></View>
        },
        tabBarStyle: {
          // Without this it seems the icons cause a scrollbar
          overflow: 'hidden'
        }
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Mood"
          component={Home}
        />
        <Tab.Screen
          name="Tracking"
          component={Home}
        />
        <Tab.Screen
          name="Analytics"
          component={Home}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </>
}
