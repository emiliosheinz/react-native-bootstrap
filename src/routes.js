import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { FirstExample, SecondExample } from '~/pages'

export default createAppContainer(
  createBottomTabNavigator({
    FirstExample,
    SecondExample,
  })
)
