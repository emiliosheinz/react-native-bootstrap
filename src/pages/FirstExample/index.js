import React from 'react'
import { useDispatch } from 'react-redux'

import { Container, Text } from './styles'

import { showToastRequest } from '~/store/modules/toast/actions'
import { Button } from '~/components'
import { TOAST_TYPES } from '~/constants'

export default function FirstExample() {
  const dispatch = useDispatch()

  return (
    <Container>
      <Text>FirstExample</Text>
      <Button
        title='MY button'
        onPress={() => {
          dispatch(
            showToastRequest({
              message: 'Assim que o toast será exibido',
              type: TOAST_TYPES.ERROR,
            })
          )
        }}
      />
    </Container>
  )
}
