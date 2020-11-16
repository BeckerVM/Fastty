import 'react-native-gesture-handler'
import React from 'react'
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//<string name="fb_login_protocol_scheme">fb[APP_ID]</string> IMPORTANTE
//PANTALLAS
import IndexScreen from './src/screens/index/index.screen'
import SessionScreen from './src/screens/session/session.screen'
import LoginScreen from './src/screens/login/login.screen'
import RegisterScreen from './src/screens/register/register.screen'
import VerificationScreen from './src/screens/verification/verification.screen'
import TestScreen from './src/screens/test/test.screen'


const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Test"
            component={TestScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Session"
            component={SessionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Verification"
            component={VerificationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App
