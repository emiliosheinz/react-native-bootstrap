import ACTION_TYPES from './actionTypes'

const INITIAL_STATE = {
  message: null,
  show: false,
}

export default function toast(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.SHOW_SUCCESS:
    case ACTION_TYPES.SHOW_FAILURE: {
      const { message, type } = action.payload

      return {
        ...state,
        show: true,
        message,
        type,
      }
    }
    case ACTION_TYPES.HIDE:
      return {
        ...INITIAL_STATE,
        show: false,
      }
    default:
      return state
  }
}
