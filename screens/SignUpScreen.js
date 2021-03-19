import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image style={styles.image}
                    source={require('../assets/finex_logo.png')}
                />
            </View>
            <View style={styles.containerBody}>
                <Text style={styles.titleText}>Sign Up</Text>
                    <Text style={styles.textinputText}>Email</Text>
                    <View style={styles.textinputRow}>
                        <FontAwesome
                            name="user-o"
                            color='#05375a'
                            size={20}
                        />
                        <TextInput style={styles.textinput} placeholder={"Your Email"} ></TextInput>

                    </View>
                    <Text style={styles.textinputText}>Password</Text>
                    <View style={styles.textinputRow}>
                        <FontAwesome
                            name="lock"
                            color='#05375a'
                            size={20}
                        />
                        <TextInput style={styles.textinput} placeholder={"Your password"} ></TextInput>
                        <TouchableOpacity onPress={() => { toggleSecureTextEntry() }}>
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>


            </View>
        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'

    },
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBody: {
        flex: 5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 50,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    containerInput: {

    },
    image: {
        height: 100,
        width: 100,
    },
    titleText: {
        color: '#05375a',
        fontSize: 25,
    },
    textinput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    textinputRow: {
        flexDirection: 'row',
        marginTop: 12,
    },
    textinputText: {
        color: '#05375a',
        fontSize: 18,
    }
})