import { takeLatest, put, all } from 'redux-saga/effects'

import ACTION_TYPES from './actionTypes'
import { showToastFailure, showToastSuccess } from './actions'

export function* showToast({ payload }) {
  const { message, type } = payload

  if (!message) {
    yield put(showToastFailure())
  }

  yield put(showToastSuccess({ message, type }))
}

export default all([takeLatest(ACTION_TYPES.SHOW_REQUEST, showToast)])
