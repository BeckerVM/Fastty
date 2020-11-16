import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

//ESTILOS
import styles from './styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

//COMPONENTES
import HeaderSession from '../../assets/svg/header.svg'
import IconFacebook from '../../assets/svg/icons/facebook.svg'

import axios from 'axios'

const SessionScreen = ({ navigation }) => {

  const testApi = async () => {
    try {
      const response = await axios.get('https://fastty-api.herokuapp.com/api/client/message/verification/2')
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  } 


  return (
    <View style={styles.screen}>
      <HeaderSession
        width={wp(102)}
        height={wp(57.7)}
      />

      <View style={styles.containerBody}>
        <View style={styles.containerLoginFacebook}>
          <Text style={styles.textContinue}>Continuar con</Text>
          <TouchableOpacity 
            style={styles.btnFacebook}
            onPress={testApi}
          >
            <IconFacebook width={wp(7)} height={wp(6)} />
            <Text style={styles.textFacebook}>FACEBOOK</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerRegister}>
      
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textRegister}>Registrate</Text>
          </TouchableOpacity>
          
          
          <View style={styles.containerAccount}>
            <Text style={styles.textAccount}>¿Ya tienes una cuenta? </Text>

            <TouchableOpacity 
              style={styles.btnLogin}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.textLinkLogin}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerConditions}>
          <Text style={styles.textConditions}>
            Al continuar
          </Text>
          <TouchableOpacity style={styles.btnConditions}>
            <Text style={[styles.textConditions, { textDecorationLine: 'underline', fontWeight: 'bold' }]}>aceptas nuestros términos, condiciones y políticas de seguridad</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SessionScreen