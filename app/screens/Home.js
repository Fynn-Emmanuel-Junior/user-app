import { View, Text } from 'react-native'
import React from 'react';
import Signin from './Signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

function Home() {
    return (
      
      <NavigationContainer>
          <Navigator> 
            <Screen name='Signin' component={Signin}  options={{title:"Sign in "}} />
          </Navigator>
       </NavigationContainer>
         
    )
}
export default Home;