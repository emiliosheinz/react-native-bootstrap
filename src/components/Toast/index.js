import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from 'react-native'

// import { Container } from './styles';

export default function Toast() {
  const { message, show } = useSelector(state => state.toast)

  function renderContent() {
    if (show) {
      return <Text>{message}</Text>
    }

    return null
  }

  return renderContent()
}
