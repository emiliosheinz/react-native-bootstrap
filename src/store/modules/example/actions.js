export function exampleRequest(params) {
  const { firstNumber, secondNumber } = params

  return {
    type: '@example/EXAMPLE_REQUEST',
    payload: { firstNumber, secondNumber },
  }
}

export function exampleSuccess(params) {
  const { result } = params

  return {
    type: '@example/EXAMPLE_SUCCESS',
    payload: { result },
  }
}

export function exampleFailure() {
  return {
    type: '@example/EXAMPLE_FAILURE',
  }
}
