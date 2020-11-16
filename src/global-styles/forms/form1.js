import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//ESTILOS GLOBALES
import { Colors } from '../theme/index'


export default StyleSheet.create({
  //LOGIN
  form: {
    paddingTop: wp(5),
    paddingHorizontal: wp(6),
  },
  formBody: {
    marginBottom: wp(5),
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: wp(5)
  },
  textHeader: {
    color: Colors.colorPrimary,
    fontWeight: 'bold',
    fontSize: wp(4.5)
  },
  textTitle: {
    textAlign: 'center',
    fontSize: wp(4.5),
    fontWeight: 'bold'
  },
  containerInputs: {
    marginTop: wp(2)
  },
  containerLabel: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textLabel: {
    color: Colors.colorSecondary,
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginLeft: wp(1)
  },
  textInput: {
    fontSize: wp(4.5),
    paddingVertical: wp(.5),
    borderBottomWidth: wp(.3),
    borderColor: Colors.colorSecondary
  },
  containerInput: {
    marginTop: wp(4)
  },
  formFooter: {
    alignItems: 'center',
  },
  textRecovery: {
    color: Colors.colorPrimary, 
    fontWeight: 'bold',
    fontSize: wp(4.3),
    marginBottom: wp(5)
  },
  btnForm: {
    backgroundColor: Colors.colorSecondary,
    paddingVertical: wp(4.5),
    paddingHorizontal: wp(23),
    borderRadius: wp(10)
  },
  textForm: {
    color: Colors.colorWhite,
    fontSize: wp(4.5),
    fontWeight: 'bold'
  },
  errorInput: {
    borderColor: 'crimson'
  },
  errorMessage: {
    color: 'crimson',
    marginTop: wp(1)
  },
  isValid: {
    backgroundColor: Colors.colorPrimary
  },
  isInvalid: {
    backgroundColor: Colors.colorSecondary
  }
})
