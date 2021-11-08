import { StyleSheet } from "react-native"

export const text = StyleSheet.create({
  title: {
    fontFamily: 'PTSans_700Bold',
    fontSize: 30,
  },
  subtitle: {
    fontFamily: 'PTSans_700Bold',
    fontSize: 24,
  },
  body: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 18,
  },
  detail: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 14,
  },




})

const secondary = '#67B3FA'
const primary = '#1955EF'
export const colours = StyleSheet.create({
  backing: {
    backgroundColor: '#FFFFFF',
  },
  secondary: {
    backgroundColor: secondary
  },
  primary: {
    backgroundColor: primary,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.7216)'
  },
  cardBacking: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  greyOnWhite: {
    backgroundColor: '#9E9E9E'
  },
  whiteTextOnBacking: {
    color: '#FFFFFF'
  },
  danger: {
    backgroundColor: '#C51800'
  },
  positive: {
    backgroundColor: '#2DE381'
  },
})
export const lightBacking = [secondary, primary]

export const shadows = StyleSheet.create({
  smallShadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3, // guesstimate
  }
})
