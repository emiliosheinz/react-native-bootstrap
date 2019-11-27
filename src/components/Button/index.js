import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'

import { ButtonContainer, ContentText } from './styles'

export default function Button(props) {
  const { isLoading, title, onPress } = props

  function renderContent() {
    if (isLoading) {
      return <ActivityIndicator color='#FFF' />
    }

    return <ContentText>{title}</ContentText>
  }

  return <ButtonContainer onPress={onPress}>{renderContent()}</ButtonContainer>
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

Button.defaultProps = {
  isLoading: false,
}
