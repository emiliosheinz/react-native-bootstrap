import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Animated } from 'react-native'

import { Container } from './styles'

import { hideToast } from '~/store/modules/toast/actions'

export default function Toast() {
  const dispatch = useDispatch()

  const [animatedOpacity] = useState(new Animated.Value(0))

  const { message, show, type } = useSelector(state => state.toast)

  useEffect(() => {
    const increaseOpacity = Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 500,
    })

    const descreaseOpacity = Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
    })

    if (show) {
      increaseOpacity.start(() => {
        setTimeout(() => {
          descreaseOpacity.start(() => {
            dispatch(hideToast())
          })
        }, 2000)
      })
    }
    // eslint-disable-next-line
  }, [show])

  function renderContent() {
    if (show) {
      return (
        <Container type={type} style={{ opacity: animatedOpacity }}>
          <Text>{message}</Text>
        </Container>
      )
    }

    return null
  }

  return renderContent()
}
