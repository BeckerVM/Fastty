const initialState = {
  message: 'test message'
}

export const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ACTION_TEST':
      return {
        ...state,
        message: 'using test reducer'
      }
    default:
      return state
  }
}
