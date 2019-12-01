import { Animated } from 'react-native'
import styled from 'styled-components/native'

import { TOAST_COLORS, TOAST_TYPES } from '~/constants'
import { COLORS } from '~/styles'

export const Container = styled(Animated.View)`
  position: absolute;
  align-self: center;
  bottom: 10%;
  padding: 15px 20px;
  border-radius: 50px;
  background-color: ${({ type = TOAST_TYPES.DEFAULT }) => TOAST_COLORS[type]};
`

export const Text = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 16px;
  opacity: 1;
`
