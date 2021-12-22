// @ts-check

import AsyncStorage from '@react-native-async-storage/async-storage'
import { uuid } from './utils'

/**
 * Journal entry data to be given to `save`.
 * @typedef {object} JournalSaveData
 * @property {string} mood - "What’s your mood?"
 * @property {number} moodIntensity - "How intense is that mood? (1-10)"
 * @property {string} description
 */

/**
 * Journal entry data to show in the journal list.
 * @typedef {object} JournalPreview
 * @property {string} id - The journal ID.
 * @property {string} mood - "What’s your mood?"
 * @property {number} moodIntensity - "How intense is that mood? (1-10)"
 * @property {Date} created
 * @property {Date} modified
 */

/**
 * A journal entry as returned by `get`.
 * @typedef {object} Journal
 * @property {string} mood - "What’s your mood?"
 * @property {number} moodIntensity - "How intense is that mood? (1-10)"
 * @property {string} description
 * @property {Date} created
 * @property {Date} modified
 */

/**
 * Handles journal data.
 */
export class Journals {
  /** @type {Record<string, Journal>} */
  #cache = {}

  /** @type {number} */
  lastEdited = 0

  /**
   * Gets a journal entry by its ID.
   * @param {string} journalId
   * @returns {Promise<Journal | null>} The journal entry, or null if it doesn't
   * exist.
   */
  async get (journalId) {
    if (!this.#cache[journalId]) {
      const json = await AsyncStorage.getItem(`journal:${journalId}`)
      if (json === null) {
        this.#cache[journalId] = null
      } else {
        const {
          mood,
          moodIntensity,
          description,
          created,
          modified
        } = JSON.parse(json)
        this.#cache[journalId] = {
          mood,
          moodIntensity,
          description,
          created: new Date(created),
          modified: new Date(modified)
        }
      }
    }
    return this.#cache[journalId]
  }

  /**
   * Saves a journal entry, whether it's an existing or a new entry.
   * @param {JournalSaveData} journal - The journal entry data to save.
   * @param {string} [journalId] - The ID of the journal entry if the journal
   * already exists. Omit if the journal entry is new.
   * @returns {Promise<string>} The ID of the journal entry.
   */
  async save ({ mood, moodIntensity, description }, journalId) {
    const now = new Date()
    const journal = {
      mood,
      moodIntensity,
      description,
      created: now,
      modified: now
    }
    if (journalId === undefined) {
      journalId = uuid()
    } else {
      const oldJournal = await this.get(journalId)
      if (oldJournal) journal.created = oldJournal.created
    }
    this.#cache[journalId] = journal
    await AsyncStorage.setItem(`journal:${journalId}`, JSON.stringify(journal))
    await AsyncStorage.setItem(
      'journal:list',
      await AsyncStorage.getItem('journal:list').then(ids => {
        return ids?.includes(journalId)
          ? ids
          : (ids ? ids + ',' : '') + journalId
      })
    )
    this.lastEdited = Date.now()
    return journalId
  }

  /**
   * Deletes a journal entry by its ID.
   * @param {string} journalId
   */
  async delete (journalId) {
    delete this.#cache[journalId]
    await AsyncStorage.setItem(
      'journal:list',
      await AsyncStorage.getItem('journal:list').then(ids => {
        if (ids) {
          return ids
            .split(',')
            .filter(id => id !== journalId)
            .join(',')
        } else {
          return ''
        }
      })
    )
    await AsyncStorage.removeItem(`journal:${journalId}`)
    this.lastEdited = Date.now()
  }

  /**
   * Lists all journals.
   * @returns {Promise<JournalPreview[]>}
   */
  async list () {
    const journalIds = await AsyncStorage.getItem('journal:list').then(ids =>
      ids ? ids.split(',') : []
    )
    return Promise.all(
      journalIds.map(async id => {
        const { mood, moodIntensity, created, modified } = await this.get(id)
        return { id, mood, moodIntensity, created, modified }
      })
    )
  }
}
