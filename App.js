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
import { LinearGradient } from 'expo-linear-gradient';
import { Journal } from './src/views/Journal';
import { Details } from './src/views/Details';
import { EditEntry } from './src/views/EditEntry';

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

  return <SafeAreaProvider>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Journal"
          component={Journal}
        />
        <Stack.Screen
          name="Details"
          component={Details}
        />
        <Stack.Screen
          name="EditEntry"
          component={EditEntry}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
}
