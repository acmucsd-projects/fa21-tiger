import React, { useContext, useEffect, useState } from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import { BaseView } from '../components/BaseView'
import { colours, text } from '../styles'
import { Card } from '../components/Card'
import { ArrowIcon } from '../buttons/ArrowIcon'
import { Happiness } from '../components/Happiness'
import { SidContext } from '../sid/Sid'
import { useRerenderOnFocus } from '../utils'

/**
 * Journal entry list.
 */
export function Journal ({ navigation }) {
  const sid = useContext(SidContext)
  const [journals, setJournals] = useState(null)

  useEffect(() => {
    sid.journals.list().then(journals => {
      // Sort by most recently created first
      setJournals(journals.sort((a, b) => b.created - a.created))
    })
  }, [sid.journals.lastEdited])
  useRerenderOnFocus(navigation)

  return (
    <BaseView
      title='My Journal'
      navigation={navigation}
      contentStyle={styles.noPadding}
    >
      <FlatList
        style={styles.content}
        data={journals ?? []}
        renderItem={({ item: { id, mood, moodIntensity, created } }) => (
          <Card
            style={styles.card}
            left={<Happiness happiness={moodIntensity} />}
            onPress={() => {
              navigation.navigate('Details', { journalId: id })
            }}
          >
            <Text style={[text.subtitle, colours.text]}>{mood}</Text>
            <Text style={[text.body, colours.text]}>
              {created.toLocaleString()}
            </Text>
          </Card>
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <Text style={[text.subtitle, colours.whiteTextOnBacking]}>
              Welcome back!
            </Text>
            <Text style={[text.body, colours.whiteTextOnBacking]}>
              Feel free to write about your thoughts and feelings here anytime
              you want.
            </Text>
            <Card
              style={styles.card}
              right={<ArrowIcon />}
              onPress={() => {
                navigation.navigate('EditEntry', {})
              }}
            >
              <Text style={[text.subtitle, colours.text]}>
                Start a new entry
              </Text>
              <Text style={[text.body, colours.text]}>
                How are you feeling today?
              </Text>
            </Card>
          </>
        }
        ListFooterComponent={
          <Text style={[text.detail, colours.whiteTextOnBacking, styles.hint]}>
            Tap a card to view or edit an entry.
          </Text>
        }
      />
    </BaseView>
  )
}

const styles = StyleSheet.create({
  noPadding: {
    padding: 0
  },
  content: {
    padding: 15
  },
  card: {
    marginTop: 10
  },
  hint: {
    textAlign: 'center',
    marginTop: 10
  }
})
