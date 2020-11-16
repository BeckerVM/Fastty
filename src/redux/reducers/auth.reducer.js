import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, SAVE_ID_VERIFICATION } from '../definitions/auth.definitions'

const initialState = {
  isLoggedIn: false, 
  user: null,
  verificationId: null,
  token: null
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  
  switch(type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
      }
    case SAVE_ID_VERIFICATION:
      return {
        ...state,
        verificationId: payload// ES EL ID DE USUARIO NECESARIO PARA REENVIAR MSM
      }
    case LOGIN_SUCCESS: 
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        user: payload.user,
        verificationId: null,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: null,
        verificationId: null,
      }
    default:
      return state
  }
}
