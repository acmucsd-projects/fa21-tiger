import React from 'react'
import Svg, { Polyline } from 'react-native-svg'
import { primary } from '../styles'

/**
 * The v downwards-pointing chevron icon on the dropdown cards
 */
export function DropdownIcon () {
  return (
    <Svg
      viewBox='0 0 20 12'
      width={20}
      height={12}
      strokeWidth={2.5}
      stroke={primary}
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
    >
      <Polyline points='2,2 10,10 18,2'></Polyline>
    </Svg>
  )
}
