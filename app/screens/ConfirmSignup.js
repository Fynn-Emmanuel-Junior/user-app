import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text,View,useWindowDimensions, Button, SafeAreaView, Image, TextInput} from 'react-native';
import colors from '../config/colors';


function ConfirmSignup() {

    const { width, height } = useWindowDimensions();
    return (
        <ScrollView>
            <StatusBar backgroundColor='#000' barStyle="#000" />
            <SafeAreaView>  
                <View>
                    <Image style={[styles.image,{width: width * 1}, { height: height * 0.3}]} source={require('../assets/images/Two_factor_authentication-pana-removebg-preview.png')} />
                </View>
                <View style={styles.viewConfirm}>
                   <Text style={styles.confirmText}>OTP Verification</Text>
                   <Text style={styles.text}>Enter the OTP Verification sent to your Email</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                   <TextInput style={styles.textinput} keyboardType="numeric" title='Enter code here'/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Send</Text>
                    </View>
                </View>

            </SafeAreaView>
        </ScrollView>
    );
}

export default ConfirmSignup;

const styles = StyleSheet.create({
 
    container: {
        backgroundColor: colors.bgColor, 
        flex: 1,
        width: '100%'
    },

    imageContainer: {
        width: '100%'
    },

    image: {
        marginVertical: '15%',
    },

    viewConfirm: {
      alignItems: 'center',
      marginVertical: 10
    
    },

    confirmText: {
        fontSize: 30,
    },

    text: {
        marginVertical: 10
    },

    textinput: {
        backgroundColor: '#fff',
        width: '90%',
        height: 50, 
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 30,
        marginVertical: 10, 
        color: '#000',
        fontSize: 30

    },

    button: {
       width: '90%',
       height: 50,
       borderRadius: 10,
       backgroundColor: 'dodgerblue',
       justifyContent: 'center',
       alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 20
    }
    


})