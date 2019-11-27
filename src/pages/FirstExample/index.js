import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Container, Text } from './styles'

import { showToastRequest } from '~/store/modules/toast/actions'
import { Button } from '~/components'

export default function FirstExample() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showToastRequest({ message: 'TESTE' }))
  }, [])

  return (
    <Container>
      <Text>FirstExample</Text>
      <Button
        title='MY button'
        onPress={() => {
          console.tron.log('button pressed')
        }}
      />
    </Container>
  )
}
