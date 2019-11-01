import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { FirstExample, SecondExample } from '~/pages'

export default createAppContainer(
  createSwitchNavigator({
    FirstExample,
    SecondExample,
  })
)
