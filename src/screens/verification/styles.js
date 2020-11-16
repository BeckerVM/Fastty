import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'


//ESTILOS GLOBALES
import { Colors } from '../../global-styles/theme/index'


export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.colorWhite,
  },
  containerBody: {
    paddingVertical: wp(2),
  },
  containerBodyTop: {
    alignItems: 'center',
   
  },
  textVerification: {
    color: Colors.colorPrimary,
    fontWeight: 'bold',
    fontSize: wp(5),
    marginTop: wp(4),
    marginLeft: wp(5)
  },
  containerBodyBottom: {
    marginTop: wp(2)
  },
})