import React, { useEffect } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'



//ESTILOS
import styles from './styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//REDUX
import { connect } from 'react-redux'
import { verifyAuth } from '../../redux/actions/auth.actions'


const IndexScreen = ({ navigation, dispatch }) => {

  useEffect(() => {
    setTimeout(() => {
      dispatch(verifyAuth()).then(() => {
        navigation.navigate('Test')
      })
      .catch(() => {
        navigation.navigate('Session')
      })      
    }, 4000)
  }, [])

  return (
    <View style={styles.screen}>
      <LottieView
        source={require('../../assets/animations/logo2.json')}
        autoPlay
        loop={false}
        style={{ width: wp(40), height: wp(50) }} 
      />
      <LottieView
        source={require('../../assets/animations/moto-perfect.json')}
        autoPlay
        loop
        style={{ width: wp(70), height: wp(70) }} 
      />
    </View>
  )
}

IndexScreen.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(IndexScreen)