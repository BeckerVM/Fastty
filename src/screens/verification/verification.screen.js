import React from 'react'
import { Text, View, ScrollView } from 'react-native'

//ESTILOS
import styles from './styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

//COMPONENTES
import HeaderSession from '../../assets/svg/header.svg'
import MotoMovil from '../../assets/svg/designs/moto-movil.svg'
import VerificationForm from './components/verfication-form/verification-form'


const VerificationScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.screen}>
      <HeaderSession
        width={wp(102)}
        height={wp(57.7)}
      />
      <View style={styles.containerBody}>
        <View style={styles.containerBodyTop}>
          <MotoMovil
            width={wp(40)}
            height={wp(40)}
          />
          <Text style={styles.textVerification}>Verificación de código</Text>
        </View>

        <View style={styles.containerBodyBottom}>
          <VerificationForm />
        </View>
      </View>
    </ScrollView>
  )
}

export default VerificationScreen