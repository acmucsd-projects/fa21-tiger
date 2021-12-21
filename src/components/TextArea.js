import React, { useState } from 'react'
import { TextInput } from 'react-native'

/**
 * A multiline text field that automatically grows to fit the text content.
 *
 * Unfortunately it does not shrink because I don't know how to do that. (TODO)
 */
export function TextArea ({ style, borderVertical = 0, ...props }) {
  const [height, setHeight] = useState()

  return (
    <TextInput
      style={[style, { height }]}
      {...props}
      multiline
      textAlignVertical='top'
      onContentSizeChange={({
        nativeEvent: {
          contentSize: { height }
        }
      }) => {
        setHeight(height + borderVertical)
      }}
    />
  )
}
