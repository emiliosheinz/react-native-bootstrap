import { takeLatest, put, all, delay } from 'redux-saga/effects'

import ACTION_TYPES from './actionTypes'
import { showToastFailure, showToastSuccess, hideToast } from './actions'

export function* showToast({ payload }) {
  const { message, timer = 3000 } = payload

  if (!message) {
    yield put(showToastFailure())
  }

  yield put(showToastSuccess({ message }))

  yield delay(timer)
  yield put(hideToast())
}

export default all([takeLatest(ACTION_TYPES.SHOW_REQUEST, showToast)])
