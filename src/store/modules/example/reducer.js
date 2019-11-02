const INITIAL_STATE = {
  exampleResult: null,
}

export default function example(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@example/EXAMPLE_SUCCESS':
      return {
        ...state,
        exampleResult: action.payload.result,
      }
    default:
      return state
  }
}
