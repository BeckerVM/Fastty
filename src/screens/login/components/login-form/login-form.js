import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'


//ESTILOS
import styles from '../../../../global-styles/forms/form1'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//COMPONENTES
import IconClose from '../../../../assets/svg/icons/close.svg'
import IconPadlock from '../../../../assets/svg/icons/padlock.svg'
import IconMessage from '../../../../assets/svg/icons/email.svg'


//REDUX
import { connect } from 'react-redux'
import { loginUser } from '../../../../redux/actions/auth.actions'


//REGLAS DE VALIDACION USANDO YUP
const LoginSchema = yup.object().shape({
  email: yup.string().email('Por favor ingrese un correo valido.').required('Su correo electrónico es requerido.'),
  password: yup.string().min(6, ({ min }) => `Su contraseña debe tener minimo ${min} caracteres.`).required('Su contraseña es requerida.')
})

const LoginForm = ({ dispatch }) => {

  const [enableShift, setEnableShift] = useState(true)
  const navigation = useNavigation()

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(loginUser(email, password)).then(() => {
      navigation.navigate('Test')
    }).catch((message) => {
      showAlertFail(message, resetForm, { email: '', password: '' })
    })
  }

  const showAlertFail = (message, resetForm, resetInputs) => (//STRING, FUNCCION, OBJETO DE STRINGS
    Alert.alert(
      "Datos Invalidos",
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

  return (
    <KeyboardAvoidingView behavior="position" enabled={enableShift}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {
          ({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
            <View style={styles.form}>
              <View style={styles.formHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Session')}>
                  <IconClose width={wp(4)} height={wp(4)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.textHeader}>Registrate</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.formBody}>
                <Text style={styles.textTitle}>Iniciar Sesión</Text>
                <View style={styles.containerInputs}>
                  <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                      <IconMessage width={wp(6)} height={wp(6)} />
                      <Text style={styles.textLabel}>E-mail</Text>
                    </View>
                    <TextInput
                      style={[styles.textInput, (errors.email && touched.email) === true ? styles.errorInput : null]}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {(errors.email && touched.email) && <Text style={styles.errorMessage}>{ errors.email }</Text>}
                  </View>
                  <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                      <IconPadlock width={wp(6)} height={wp(6)} />
                      <Text style={styles.textLabel}>Contraseña</Text>
                    </View>
                    <TextInput
                      style={[styles.textInput, (errors.password && touched.password) === true ? styles.errorInput : null]}
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      onFocus={() => setEnableShift(true)}
                    />
                    {(errors.password && touched.password) && <Text style={styles.errorMessage}>{ errors.password }</Text>}
                  </View>
                </View>
              </View>

              <View style={styles.formFooter}>
                <TouchableOpacity>
                  <Text style={styles.textRecovery}>¿Has olvidado tu contraseña?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  disabled={!isValid}
                  style={[styles.btnForm, !isValid === true ? styles.isInvalid : styles.isValid]}
                  onPress={handleSubmit}
                >
                  <Text style={styles.textForm}>Iniciar Sesión</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }
      </Formik>
    </KeyboardAvoidingView>
  )
}

LoginForm.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(LoginForm)