import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ArrowIcon } from '../buttons/ArrowIcon'
import { colours, text } from '../styles'
import { Card } from './Card'
import { LightBacking } from './LightBacking'
import { Logo } from './Logo'
import { ShadedOverlay } from './ShadedOverlay'

export function Menu ({ onClose }) {
  return (
    <ShadedOverlay onClose={onClose} wrapperStyle={styles.overlayWrapper}>
      <View style={styles.wrapper}>
        <LightBacking />
        <Logo style={styles.logo} />
        <Card style={styles.card} right={<ArrowIcon />}>
          <Text style={[text.subtitle, colours.text]}>Analytics</Text>
          <Text style={[text.body, colours.text]}>
            View historical insights
          </Text>
        </Card>
        <Card style={styles.card} right={<ArrowIcon />}>
          <Text style={[text.subtitle, colours.text]}>Notifications</Text>
          <Text style={[text.body, colours.text]}>Set notification times</Text>
        </Card>
        <Card style={styles.card} right={<ArrowIcon />}>
          <Text style={[text.subtitle, colours.text]}>Settings</Text>
          <Text style={[text.body, colours.text]}>
            Set theme, language, etc.
          </Text>
        </Card>
        <Text style={[text.detail, colours.whiteTextOnBacking, styles.version]}>
          Menta v1.0
        </Text>
      </View>
    </ShadedOverlay>
  )
}

const styles = StyleSheet.create({
  overlayWrapper: {
    alignItems: 'flex-start'
  },
  wrapper: {
    flex: 1,
    width: 291,
    padding: 15
  },
  logo: {
    marginBottom: 15
  },
  card: {
    marginBottom: 10
  },
  version: {
    textAlign: 'center'
  }
})
