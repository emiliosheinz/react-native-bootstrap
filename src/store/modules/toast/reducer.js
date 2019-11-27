import ACTION_TYPES from './actionTypes'

const INITIAL_STATE = {
  message: null,
  show: false,
}

export default function toast(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.SHOW_SUCCESS:
    case ACTION_TYPES.SHOW_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        show: true,
      }
    case ACTION_TYPES.HIDE:
      return {
        ...state,
        show: false,
      }
    default:
      return state
  }
}
