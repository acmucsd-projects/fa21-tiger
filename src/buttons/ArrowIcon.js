import React from 'react'
import Svg, { Line, Polyline } from 'react-native-svg'
import { primary } from '../styles'

/**
 * The -> icon on the cards
 */
export function ArrowIcon () {
  return (
    <Svg
      viewBox='0 0 24 24'
      width={24}
      height={24}
      strokeWidth={2.5}
      stroke={primary}
      strokeLinecap='round'
      fill='none'
    >
      <Line x1={2} y1={12} x2={22} y2={12} />
      <Polyline points='14,4 22,12 14,20'></Polyline>
    </Svg>
  )
}
