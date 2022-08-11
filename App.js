import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet , Text, View , ScrollView, SafeAreaView } from 'react-native';
import colors from './app/config/colors';
import Signin from './app/screens/Signin';
import CreatAccount from './app/screens/CreatAccount';
import ConfirmSignup from './app/screens/ConfirmSignup';
import Welcome from './app/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <StatusBar barStyle="#000"/>
        <Navigator> 
          <Screen name='sign in' component={Signin}  />
          <Screen name='create account' component={CreatAccount}  />
          <Screen name='OTP Verification' component={ConfirmSignup}  />
          <Screen name='welcome' component={Welcome} />
        </Navigator>
    </NavigationContainer>
  
  ); 
}

const styles = StyleSheet.create({

  scrollview: {
      backgroundColor: colors.bgColor,
      width: '100%'
  },

  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
