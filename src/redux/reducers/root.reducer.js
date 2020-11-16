import { combineReducers } from 'redux'

//REDUCTORES
import { testReducer } from './test.reducer'
import { authReducer } from './auth.reducer'
import { messageReducer } from './messaje.reducer'

export const rootReducer = combineReducers({
  test: testReducer,
  auth: authReducer,
  message: messageReducer
})