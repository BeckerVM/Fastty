import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//ESTILOS GLOBALES
import { Colors } from '../../../../global-styles/theme/index'


export default StyleSheet.create({

  //FORM VERIFICATION
  containerInputs: {
    flexDirection: 'row',
    paddingHorizontal: wp(8),
    justifyContent: 'space-between',
  },
  inputVerification: {
    backgroundColor: Colors.colorSecondary,
    width: wp(14),
    height: wp(14),
    borderRadius: wp(100),
    fontSize: wp(6),
    textAlign: 'center',
  },
  containerButtons: {
    alignItems: 'center'
  },
  textResend: {
    color: Colors.colorPrimary,
    fontSize: wp(4.2),
    fontWeight: 'bold',
    marginTop: wp(2)
  },
  btnVerification: {
    marginTop: wp(8),
    paddingVertical: wp(4.5),
    paddingHorizontal: wp(23),
    borderRadius: wp(10)
  },
  textVerification: {
    color: Colors.colorWhite,
    fontSize: wp(4.5),
    fontWeight: 'bold'
  },
  isValid: {
    backgroundColor: Colors.colorPrimary
  },
  isInvalid: {
    backgroundColor: Colors.colorSecondary
  }
})
