import React from 'react';
import { SafeAreaView , Button , Text , ScrollView , TextInput , StyleSheet , Image , View , useWindowDimensions } from 'react-native';
import colors from '../config/colors';
import { StatusBar } from 'expo-status-bar';


function Welcome() {
    return (
        <ScrollView>
            <StatusBar barStyle="#000" />
            <SafeAreaView>
               <View>
                  <Text>Welcome Home</Text>
               </View>
            </SafeAreaView>
            
        </ScrollView>
    );
}

export default Welcome;