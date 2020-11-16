import axios from 'axios'
import { API_URL } from '../api'

class AuthService {
  //PARA REGISTRAR LOS DATOS DE REGISTRO
  register(name, email, phone, password, terms) { //SON CADENAS
    return axios.post(`${API_URL}/client/register`, {
      name, 
      email,
      phone,
      password,
      terms
    })
  }

  //PARA VERIFICAR Y CONFIRMAR LA CUENTA DEL USUARIO
  verify(user, code) { //user: ID DE CLIENTE GUARDADO EN EL REDUCER, code: CODIGO ENVIADO AL CELULAR 
    return axios.post(`${API_URL}/client/verification`, {
      user,
      code
    })
  }

  //PARA REENVIAR MENSAJE DE TEXTO DE CELULAR DEL CLIENTE QUE QUIERE CONFIRMAR SU CUENTA DE USUARIO
  resend(user) {//user: ID DE CLIENTE
    return axios.get(`${API_URL}/client/message/verification/${user}`)
  }

  //PARA LOGUEAR LOS USUARIOS PUESSSSSSSS!
  login(email, password) {
    return axios.post(`${API_URL}/auth/login`, {
      email,
      password
    })
  }
}


export default new AuthService()