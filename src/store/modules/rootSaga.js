import { all } from 'redux-saga/effects'

import example from './example/sagas'
import toast from './toast/sagas'

export default function* rootSaga() {
  return yield all([example, toast])
}
