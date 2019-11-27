import ACTION_TYPES from './actionTypes'

export function showToastRequest(params = {}) {
  const { message, timer } = params

  return {
    type: ACTION_TYPES.SHOW_REQUEST,
    payload: { message, timer },
  }
}

export function showToastSuccess(params = {}) {
  const { message } = params

  return {
    type: ACTION_TYPES.SHOW_SUCCESS,
    payload: { message },
  }
}

export function showToastFailure() {
  const message = 'Não foi possível exibir o toast.'

  return {
    type: ACTION_TYPES.SHOW_SUCCESS,
    payload: { message },
  }
}

export function hideToast() {
  return {
    type: ACTION_TYPES.HIDE,
  }
}
