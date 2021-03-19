import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const LoginScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const textInputChange = (val) => {
        if (val.length != 0){
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
            })
        }else{
            setData({
                ...data,
                check_textInputChange: false,
            })
        }
    }

    const toggleSecureTextEntry = () => {
        setData({
            ...data, 
            secureTextEntry: !data.secureTextEntry
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                        style={styles.image}
                        source={require('../assets/finex_logo.png')} 
                />
            </View>
            <Animatable.View animation="bounceIn" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color='#05375a'
                        size={20}
                    />
                    <TextInput style={styles.textInput} placeholder={"Your Email"} onChangeText={(val) => textInputChange(val)}></TextInput>
                    {
                    data.check_textInputChange ?                     
                        <Animatable.View animation="bounceIn">
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View> : 
                        <Animatable.View animation="bounceIn">
                            <Feather
                            name="circle"
                            color="green"
                            size={20}
                            />      
                        </Animatable.View>
                    }

                </View>        
                <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color='#05375a'
                        size={20}
                    />
                    <TextInput style={styles.textInput} placeholder={"Your password"} secureTextEntry={data.secureTextEntry}></TextInput>
                    <TouchableOpacity onPress={() => {toggleSecureTextEntry()}}>
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}   
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.signIn, {
                        paddingHorizontal: 100,
                        backgroundColor: '#009387',
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15}]}
                        onPress={()=>{navigation.navigate("DrawerStack")}}
                        >
                        <Text style={[styles.signInText,{
                            color: '#fff'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.signIn, {
                        paddingHorizontal: 95,
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]} onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={styles.signInText}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
    )
}


export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#009387',
    },
    image: {
        height: 250, 
        width: 250,
    },
    header: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    text_header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 12,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    buttons: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 10,
    },
    signInText: {
        fontSize: 20, 
    }
})