import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'


import styles from './styles'

//REDUX
import { connect } from 'react-redux'
import { verifyAccount, resendMessage } from '../../../../redux/actions/auth.actions'

//VALIDACIONES CON YUP
const VerificationSchema = yup.object().shape({
  char1: yup.string().required(),
  char2: yup.string().required(),
  char3: yup.string().required(),
  char4: yup.string().required(),
  char5: yup.string().required(),
})

const VerificationForm = ({ user, dispatch }) => {

  const [counter, setCounter] = useState(30)
  const navigation = useNavigation()

  /*useEffect(() => {
    setTimeout(() => {
      if (counter !== 0) {
        setCounter(counter - 1)
        console.log('Decrementando contador')
      }
      return
    }, 1000)
  }, [counter])*/

  const handleSubmit = ({ char1, char2, char3, char4, char5}, { resetForm }) => {
    const code = char1 + char2 + char3 + char4 + char5
    dispatch(verifyAccount(user, code)).then(() => {
      navigation.navigate('Test')
    })
    .catch(message => {
      showAlertFail(message, resetForm, {
        char1: '',
        char2: '',
        char3: '',
        char4: '',
        char5: ''
      })
    })
  }

  const showAlertFail = (message, resetForm, resetInputs) => (//STRING, FUNCCION, OBJETO DE STRINGS
    Alert.alert(
      "Upss!",
      message,
      [
        { text: "OK", onPress: () => {
          resetForm({
            values: resetInputs
          })
        }}
      ],
    )
  )

  const handleResend = () => {
    dispatch(resendMessage(user)).then((message) => {
      Alert.alert(
        "Reenviando mensaje de texto",
        message,
        [
          { text: "OK" }
        ],
      )
    })
    .catch(message => {
      Alert.alert(
        "!Upss!",
        message,
        [
          { text: "OK" }
        ],
      )
    })
  }

  return (
    <Formik
      initialValues={{ char1: '', char2: '', char3: '', char4: '', char5: '' }}
      onSubmit={handleSubmit}
      validationSchema={VerificationSchema}
    >
      {
        ({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <View>
            <View style={styles.containerInputs}>
              <TextInput 
                maxLength={1} style={styles.inputVerification} 
                onChangeText={handleChange('char1')}
                onBlur={handleBlur('char1')}
                value={values.char1}
              />
              <TextInput 
                maxLength={1} 
                style={styles.inputVerification}
                onChangeText={handleChange('char2')}
                onBlur={handleBlur('char2')}
                value={values.char2} 
              />
              <TextInput 
                maxLength={1} 
                style={styles.inputVerification}
                onChangeText={handleChange('char3')}
                onBlur={handleBlur('char3')}
                value={values.char3} 
              />
              <TextInput 
                maxLength={1} 
                style={styles.inputVerification} 
                onChangeText={handleChange('char4')}
                onBlur={handleBlur('char4')}
                value={values.char4}
              />
              <TextInput 
                maxLength={1} 
                style={styles.inputVerification} 
                onChangeText={handleChange('char5')}
                onBlur={handleBlur('char5')}
                value={values.char5}
              />
            </View>

            <View style={styles.containerButtons}>
              <TouchableOpacity onPress={handleResend}>
                <Text style={styles.textResend}>Reenviar ({counter})</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!isValid}
                style={[styles.btnVerification, !isValid === true ? styles.isInvalid : styles.isValid]}
                onPress={handleSubmit}
              >
                <Text style={styles.textVerification}>Verificar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </Formik>
  )
}

VerificationForm.propTypes = {
  user: PropTypes.string, //CODIGO ID DEL USUARIO
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  const { verificationId } = state.auth

  return {
    user: verificationId
  }
}

export default connect(mapStateToProps)(VerificationForm)