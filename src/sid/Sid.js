// @ts-check

import { createContext } from 'react'
import { Journals } from './Journals'

/**
 * Sid (named after our backend developer) handles the back end of Menta.
 * Currently, it uses React Native Async Storage, but in the future, if we ever
 * add a server-side back end, it would mostly involve just editing Sid.
 */
export class Sid {
  journals = new Journals()
}

/**
 * @type {React.Context<Sid>}
 */
export const SidContext = createContext(null)
