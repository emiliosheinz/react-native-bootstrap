import ACTION_TYPES from './actionTypes'

export function showToastRequest(params = {}) {
  const { message, type } = params

  return {
    type: ACTION_TYPES.SHOW_REQUEST,
    payload: { message, type },
  }
}

export function showToastSuccess(params = {}) {
  const { message, type } = params

  return {
    type: ACTION_TYPES.SHOW_SUCCESS,
    payload: { message, type },
  }
}

export function showToastFailure() {
  const message = 'Não foi possível exibir o toast.'
  const type = 'TOAST_ERROR'

  return {
    type: ACTION_TYPES.SHOW_SUCCESS,
    payload: { message, type },
  }
}

export function hideToast() {
  return {
    type: ACTION_TYPES.HIDE,
  }
}
