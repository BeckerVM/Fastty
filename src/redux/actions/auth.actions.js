import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SAVE_ID_VERIFICATION,
  LOGOUT
} from '../definitions/auth.definitions'
import { SET_MESSAGE, CLEAR_MESSAGE } from '../definitions/message.definitions'

//SERVICIOS
import AuthServices from '../../services/auth.services'// UNA CLASE
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwt_decode from 'jwt-decode'

export const registerUser = (name, email, phone, password, terms) => dispatch => {
  return AuthServices.register(name, email, phone, password, terms).then(response => {
    console.log(response.data)
    
    dispatch({
      type:  SAVE_ID_VERIFICATION,
      payload: response.data.data //EL ID DE USUARIO PARA NECESARIO PARA PODER REEEVIAR EL MSM
    })

    return Promise.resolve(response.data.message)
  })
  .catch(error => {
    console.log(error.response.data)

    //dispatch({ type: REGISTER_FAIL })

    return Promise.reject(error.response.data.message)
  })
}

export const verifyAccount = (user, code) => dispatch => {//VERIFICACION PARA ACTIVAR LA CUENTA DEL USUARIO
  return AuthServices.verify(user, code).then(response => {
    const token = JSON.stringify(response.data.token)
    const userDecoded = jwt_decode(token)

    return AsyncStorage.setItem('authToken', token).then(() => {

      dispatch({ type: LOGIN_SUCCESS, payload: { token, user: userDecoded } })
      return Promise.resolve('Felicidades su cuenta ha sido activada correctamente.')
    })
  })
  .catch(error => {
    return Promise.reject(error.response.data.message)
  })
}

export const resendMessage = (user) => dispatch => {//user: ID DEL USUARIO
  return AuthServices.resend(user).then((response) => {
    return Promise.resolve(response.data.message)
  })
  .catch(error => {
    return Promise.reject(error.response.data.message)
  })
}


export const verifyAuth = () => dispatch => { //VERIFICA SI EXISTE EL TOKEN Y ASIGNA NUEVAMENTE LOS DATOS EN EL REDUCTOR
  return AsyncStorage.getItem('authToken').then(token => {
    if(token) {
     const userDecoded = jwt_decode(token)
     dispatch({ type: LOGIN_SUCCESS, payload: { token, user: userDecoded } })

     return Promise.resolve()
    } else {
      return Promise.reject()
    }
  })
}

export const loginUser = (email, password) => dispatch => {
  return AuthServices.login(email, password).then(response => {
    const token = JSON.stringify(response.data.token)
    const userDecoded = jwt_decode(token)

    return AsyncStorage.setItem('authToken', token).then(() => {

      dispatch({ type: LOGIN_SUCCESS, payload: { token, user: userDecoded } })
      return Promise.resolve()
    })
  })
  .catch(error => {
    return Promise.reject(error.response.data.message)
  })
}


export const logoutUser = () => dispatch => {
  return AsyncStorage.getItem('authToken').then(token => {
    console.log(token)
    if(token) {
      AsyncStorage.removeItem('authToken').then(() => {
        dispatch({
          type: LOGOUT
        })
        Promise.resolve()
      }).catch(() => {
        Promise.reject()
      })
    }
  })
}