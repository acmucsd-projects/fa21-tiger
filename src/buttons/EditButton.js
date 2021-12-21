import React from 'react'
import { TouchableOpacity } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { textColour } from '../styles'

/**
 * The pencil icon button in the Figma
 */
export function EditButton ({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox='0 0 40 40' width={40} height={40} fill={textColour}>
        <Path d='M24.125 10.8228L28.8057 15.4588L13.46 31.136L8.77929 26.5L24.125 10.8228Z' />
        <Path d='M25.3193 9.5864L30 14.2224L32.9597 11.2088C33.2504 10.9129 33.2471 10.4356 32.9524 10.1437L29.3374 6.56326C29.0435 6.27221 28.571 6.27547 28.2813 6.57055L25.3193 9.5864Z' />
        <Path d='M7.41525 33.4323L12.0557 32.5123L7.37498 27.8763L6.53495 32.5604C6.44143 33.0819 6.89862 33.5347 7.41525 33.4323Z' />
      </Svg>
    </TouchableOpacity>
  )
}
