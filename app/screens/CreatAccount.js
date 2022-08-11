import React , {useState} from 'react';
import { SafeAreaView , Button , Text , ScrollView , TextInput , StyleSheet , Image , View , useWindowDimensions, Linking } from 'react-native';
import colors from '../config/colors';
import { StatusBar } from 'expo-status-bar';



function createAccount() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const { width, height } = useWindowDimensions();

    return (

        <ScrollView style={styles.scrollview}>
            <StatusBar  barStyle="#000"/>
            <SafeAreaView style={styles.container }>

                <View style={styles.imageContainer}>
                    <Image style={[{ height: height * 0.1}, {width: width * 0.2} ]} source={require('../assets/images/download.png')} />
                </View>

                <View style={styles.createAccount}>
                    <Text style={styles.textAccount}>Create Account</Text>
                </View>

                <View style={styles.inputContainer}>  

                    <TextInput value={name}  style={styles.textinput} onChangeText={(text) => setName(text)} placeholder='Username' />
                    <TextInput style={styles.textinput} placeholder='password' secureTextEntry={true} />
                    <TextInput value={email} onChangeText={(text) => setEmail(text)}  style={styles.textinput} keyboardText='email-address' placeholder='Email' />
                    <View style={styles.buttonContainer} >
                      <Text style={styles.buttonText}  onPress={() => console.log('button clicked')}>Create account</Text>
                    </View>
                </View>

                <View style={{width: '100%', alignItems: 'center'}}>
                    <Text >By sigining up , you've agreed to our{' '}<Text style={{color: 'dodgerblue'}}> Terms & Conditions</Text> </Text>
                </View>

                <View style={styles.accountContainer}>
                    <Text style={styles.noAccount}>
                        Already have an account ?
                    </Text>
                    <Button title="Login" style={styles.createAccount} /> 
                </View>
            </SafeAreaView>
    </ScrollView>   
    );
}

export default createAccount;

const styles = StyleSheet.create({
    scrollview: {
       backgroundColor: colors.bgColor,
       width: '100%',
       
    },
    container: {
        backgroundColor: colors.bgColor,
        flex: 1,
        width: '100%'
        
    },

    imageContainer: {
        marginVertical: 30,
        alignItems: 'center'
    },

    createAccount: {
       alignItems: 'center'
    },

    textAccount: {
      fontSize: 30
    },

    inputContainer: {
        marginVertical: 15,
        width: '100%',
        alignItems: 'center',
    
    },

    textinput: {
        backgroundColor: '#fff',
        width: '90%',
        height: 50, 
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 30,
        marginVertical: 10, 
        color: '#000',
        fontSize: 20

    },

    buttonContainer: {
        marginVertical: 20,
        borderRadius: 10,
        width: '90%',
        height: 50,
        backgroundColor: 'dodgerblue',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
   
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },

    forgetPassword: {
        color: '#000',
        fontSize: 20 ,
        justifyContent: 'center',
        alignItems: 'center'
    },

    noAccount: {
        fontSize: 20
    }

})