import React, {useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions/auth.actions'

const TestScreen = ({ user, dispatch }) => {
  const navigation = useNavigation()

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      console.log('Cierre de sesión existosa')
      navigation.navigate('Session')
    })
    .catch(() => {
      console.log('No existe el token')
    })
  }

  return (
    <View>
      <Text>USUARIO: { user ? user.email : null }</Text>
      <Button 
        title="CERRAR SESIÓN"
        onPress={handleLogout}
      />
    </View>
  ) 
}


const mapStateToProps = (state) => {
  const { user } = state.auth
  return {
    user
  }
}

export default connect(mapStateToProps)(TestScreen)