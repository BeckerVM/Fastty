import React from 'react'
import { View } from 'react-native'


//ESTILOS
import styles from './styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//COMPONENTES
import RegisterForm from './components/register-form/register-form'
import Footer from '../../assets/svg/footer.svg'


const RegisterScreen = () => {
  return (
    <View style={styles.screen}>
      <RegisterForm />
      <Footer width={wp(101)} height={wp(28)} />   
    </View>
  )
}

export default RegisterScreen