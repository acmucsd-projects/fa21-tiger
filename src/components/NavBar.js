import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export function NavBar ({ views, onSelect }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {views.map(view => (
        <TouchableOpacity style={{ flex: 1, padding: 20, alignItems: 'center' }} onPress={() => onSelect(view)}>
          <Text>{view.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
