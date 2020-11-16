import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//ESTILOS GLOBALES
import { Colors } from '../../global-styles/theme/index'


export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorWhite,
    flex: 1
  },
  containerBody: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: wp(2)
  },
  containerLoginFacebook: {
    //backgroundColor: 'crimson',
    alignItems: 'center',
  },
  textContinue: {
    color: Colors.colorSecondary,
    fontWeight: 'bold',
    fontSize: wp(4.3)
  },
  btnFacebook: {
    backgroundColor: Colors.colorBtnFacebook,
    paddingHorizontal: wp(15.5),
    marginTop: wp(4),
    borderRadius: wp(1),
    paddingVertical: wp(5),
    flexDirection: 'row'
  },
  textFacebook: {
    color: Colors.colorWhite,
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginLeft: wp(2)
  },
  containerRegister: {
    alignItems: 'center',
    width: wp(100),
  },
  textRegister: {
    color: Colors.colorPrimary,
    fontWeight: 'bold',
    fontSize: wp(4.5)
  },
  containerAccount: {
    marginTop: wp(4),
    color: Colors.colorSecondary,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  textAccount: {
    fontSize: wp(4.2),
    color: Colors.colorSecondary,
  },
  textLinkLogin: {
    color: Colors.colorPrimary,
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  btnLogin: {
    alignItems: 'center',
    marginLeft: wp(2),
  },
  containerConditions: {
    alignItems: 'center',
    paddingHorizontal: wp(2)
  },
  textConditions: {
    color: Colors.colorSecondary,
    textAlign: 'center'
  },
  btnConditions: {
    
  }
})