import React from 'react'
import { View } from 'react-native'


//ESTILOS
import styles from './styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//COMPONENTES
import LoginForm from './components/login-form/login-form'
import Footer from '../../assets/svg/footer.svg'


const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <LoginForm />
      <Footer width={wp(101)} height={wp(28)} />   
    </View>
  )
}

export default LoginScreen