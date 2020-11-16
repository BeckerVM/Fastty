import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

//ESTILOS
import styles from '../../../../global-styles/forms/form1' //LOS ESTILOS SON LOS MISMOS QUE DEL FORMULARIO LOGIN
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//COMPONENTES
import IconClose from '../../../../assets/svg/icons/close.svg'
import IconPadlock from '../../../../assets/svg/icons/padlock.svg'
import IconMessage from '../../../../assets/svg/icons/email.svg'
import IconUser from '../../../../assets/svg/icons/user.svg'
import IconPhone from '../../../../assets/svg/icons/telephone.svg'


//REDUX
import { connect } from 'react-redux'
import { registerUser } from '../../../../redux/actions/auth.actions'


const phoneExpReg = /^[0-9]{9}$/
//REGLAS DE VALIDACION USANDO YUP
const RegisterSchema = yup.object().shape({
  email: yup.string().email('Por favor ingrese un correo valido.').required('Su correo electrónico es requerido.'),
  password: yup.string().min(6, ({ min }) => `Su contraseña debe tener minimo ${min} caracteres`).required('La contraseña es requerida.'),
  phone: yup.string().matches(phoneExpReg, 'Ingrese un numero de celular valido').required('Su celular es requerido.'),
  name: yup.string().required('Su nombre es requerido.')
})

const RegisterForm = ({ dispatch }) => {

  const [enableShift, setEnableShift] = useState(false)//PARA QUE EL INPUT SE VEA SI NO SE MIRA A CAUSA DEL TECLADO
  const navigation = useNavigation()

  // FUNCIONES
  const handleRegister = ({ name, email, phone, password }, { resetForm }) => {
    dispatch(registerUser(name, email, phone, password, true)).then(() => {
      showAlertSuccess('Se le enviará un codigo de verificación a su celular para validar su cuenta.')
    })
    .catch((message) => {
      if(message.includes('correo')) {
        showAlertFail(message, resetForm, { name, email: '', phone, password })
      } else {
        showAlertFail(message, resetForm, { name, email, phone: '', password })
      }
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

  const showAlertSuccess = (message) => (
    Alert.alert(
      'Datos Validos',
      message,
      [
        {
          text: 'CONTINUAR', onPress: () => {
            navigation.navigate('Verification')
          }
        }
      ]
    )
  )

  return (
    <KeyboardAvoidingView behavior="position" enabled={enableShift}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          password: ''
        }}
        onSubmit={handleRegister}
        validationSchema={RegisterSchema}
      >
        {
          ({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
            <View style={styles.form}>
              <View style={styles.formHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Session')} >
                  <IconClose width={wp(4)} height={wp(4)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                  <Text style={styles.textHeader}>Iniciar Sesión</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.formBody}>
                <Text style={styles.textTitle}>Registrarse</Text>
                <View style={styles.containerInputs}>
                  <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                      <IconUser width={wp(6)} height={wp(6)} />
                      <Text style={styles.textLabel}>Nombre</Text>
                    </View>
                    <TextInput
                      style={[styles.textInput, (errors.name && touched.name) === true ? styles.errorInput : null]}
                      onFocus={() => setEnableShift(false)}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {(errors.name && touched.name) && <Text style={styles.errorMessage}>{ errors.name }</Text>}
                  </View>
                  <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                      <IconMessage width={wp(6)} height={wp(6)} />
                      <Text style={styles.textLabel}>E-mail</Text>
                    </View>
                    <TextInput
                      style={[styles.textInput, (errors.email && touched.email) === true ? styles.errorInput : null]}
                      onFocus={() => setEnableShift(true)}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {(errors.email && touched.email) && <Text style={styles.errorMessage}>{ errors.email }</Text>}
                  </View>
                  <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                      <IconPhone width={wp(6)} height={wp(6)} />
                      <Text style={styles.textLabel}>Celular</Text>
                    </View>
                    <TextInput
                      style={[styles.textInput, (errors.phone && touched.phone) === true ? styles.errorInput : null]}
                      onFocus={() => setEnableShift(true)}
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      value={values.phone}
                    />
                    {(errors.phone && touched.phone) && <Text style={styles.errorMessage}>{ errors.phone }</Text>}
                  </View>
                  <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                      <IconPadlock width={wp(6)} height={wp(6)} />
                      <Text style={styles.textLabel}>Contraseña</Text>
                    </View>
                    <TextInput
                      style={[styles.textInput, (errors.password && touched.password) === true ? styles.errorInput : null]}
                      secureTextEntry={true}
                      onFocus={() => setEnableShift(true)}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {(errors.password && touched.password) && <Text style={styles.errorMessage}>{ errors.password }</Text>}
                  </View>

                </View>
              </View>

              <View style={styles.formFooter}>
                <TouchableOpacity  
                  disabled={!isValid}
                  onPress={handleSubmit} style={styles.btnForm}
                  style={[styles.btnForm, !isValid === true ? styles.isInvalid : styles.isValid]}
                >
                  <Text style={styles.textForm}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }
      </Formik>
    </KeyboardAvoidingView>
  )
}

RegisterForm.propTypes = {
  message: PropTypes.string,
  dispatch: PropTypes.func
}

export default connect()(RegisterForm)