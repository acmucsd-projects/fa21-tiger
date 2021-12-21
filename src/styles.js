import { StyleSheet } from 'react-native'

export const text = StyleSheet.create({
  title: {
    fontFamily: 'PTSans_700Bold',
    fontSize: 30
  },
  subtitle: {
    fontFamily: 'PTSans_700Bold',
    fontSize: 24
  },
  body: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 18
  },
  detail: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 14
  }
})

export const secondary = '#67B3FA'
export const primary = '#1955EF'
export const greyOnWhite = '#9E9E9E'
export const textColour = 'rgba(0, 0, 0, 0.7216)'
export const white = '#FFFFFF'
export const colours = StyleSheet.create({
  backing: {
    backgroundColor: white
  },
  secondary: {
    backgroundColor: secondary
  },
  primary: {
    backgroundColor: primary
  },
  text: {
    color: textColour
  },
  cardBacking: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  greyOnWhite: {
    backgroundColor: greyOnWhite
  },
  whiteTextOnBacking: {
    color: white
  },
  danger: {
    backgroundColor: '#C51800'
  },
  positive: {
    backgroundColor: '#2DE381'
  },
  overlayBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  }
})
export const lightBacking = [primary, secondary]

export const shadows = StyleSheet.create({
  smallShadow: {
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3 // guesstimate
  }
})
