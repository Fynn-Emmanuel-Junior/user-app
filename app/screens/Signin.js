import React , {useState} from 'react';
import { SafeAreaView , Button , Text , ScrollView , TextInput , StyleSheet , Image , View , useWindowDimensions, StatusBar } from 'react-native';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';

function Signin({navigation}) {

    const [name,setName] = useState('');
    const { width, height } = useWindowDimensions();

    return (

        <ScrollView style={styles.scrollview}>
            <StatusBar barStyle="#000" />
            <SafeAreaView style={styles.container }>

                <View style={styles.imageContainer}>
                    <Image style={[{ height: height * 0.2}, {width: width * 0.4} ]} source={require('../assets/images/download.png')}/>
                </View>

                <View style={styles.inputContainer}>  
                    <TextInput value={name} onChangeText={(text) => setName(text)} style={styles.textinput} placeholder='Username' />
                    <TextInput style={styles.textinput}  placeholder='password' secureTextEntry={true} />
                    <View style={styles.buttonContainer} >
                    <Text style={styles.buttonText}  onPress={() => console.log('button clicked')}>Sign in</Text>
                    </View>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.forgetPassword}>
                            Forgot Password ?
                    </Text>
                </View>

                <View style={styles.accountContainer}>
                    <Text style={styles.noAccount}>
                        Don't have an account ? 
                    </Text>
                    <Button title="Create account" onPress={() => navigation.navigate('CreatAccount')} style={styles.createAccount} />
                </View>

            </SafeAreaView>
    </ScrollView>   
    );
}

export default Signin;

const styles = StyleSheet.create({

    scrollview: {
      backgroundColor: colors.bgColor,
      width: '100%'
    },
    container: {
        backgroundColor: colors.bgColor,
        flex: 1,
        width: '100%',
        alignItems: 'center'
        
    },

    imageContainer: {
        marginVertical: 40,
        alignItems: 'center'
    },

    inputContainer: {
        marginVertical: 15,
        width: '100%',
        alignItems: 'center'
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
        fontSize: 17

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