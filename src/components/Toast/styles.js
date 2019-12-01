import { Animated } from 'react-native'
import styled from 'styled-components/native'

import { TOAST_COLORS, TOAST_TYPES } from '~/constants'
import { COLORS } from '~/styles'

function getToastTextColor(type) {
  if (type === TOAST_TYPES.WARNING) {
    return COLORS.BLACK
  }

  return COLORS.WHITE
}

export const Container = styled(Animated.View)`
  position: absolute;
  align-self: center;
  bottom: 10%;
  padding: 15px 25px;
  border-radius: 50px;
  background-color: ${({ type = TOAST_TYPES.DEFAULT }) => TOAST_COLORS[type]};
`

export const Text = styled.Text`
  color: ${({ type = TOAST_TYPES.DEFAULT }) => getToastTextColor(type)};
  font-size: 16px;
  opacity: 1;
`
