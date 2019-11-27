import { combineReducers } from 'redux'

import example from './example/reducer'
import toast from './toast/reducer'

export default combineReducers({
  example,
  toast,
})
