import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Dimensions, FlatList } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather'

import Header from './Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const colorpattern = { O: '#FE7F27', R: '#A348A4', A: '#00A2E8' }








const NotificationScreen = ({navigation}) => {
    const [apiData, setApiData] = useState('')
    const [searchBarInput, setSearchBarInput] = useState('')
    const clearSearchBarInput = () => {
        setSearchBarInput('')
        apiCall()
    }

    useEffect(() => {
        apiCall()
    },[])

    const apiCall = (inputText) => {
        if (inputText == undefined){
            inputText = ""
        }
        fetch('http://192.168.20.19/API/finex_mock_api.php?Section=NotificationScreen&SearchString=' + inputText)
            .then((response) => (response.json()))
            .then((responseJson) => {
                setApiData(responseJson)
    
            })
            .catch((error) => {
                console.warn(error)
            })
    }

    const individual_email = (email) => {
        const output =
            <TouchableOpacity onPress={() => {navigation.navigate('Notify', email)}}>
                <View style={styles.item} key={email.id}>
                    <View style={styles.itemIcon}><View style={[styles.icon, { backgroundColor: colorpattern[email.letter] }]}><Text style={{ fontWeight: 'bold', color: 'white', fontSize: 35 }}>{email.letter}</Text></View></View>
                    <View style={styles.itemText}>
                        <View style={styles.row}>
                            <View style={styles.one}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>{email.header}</Text></View>
                            <View style={styles.two}><Text style={{ color: 'grey', }}>{email.time}</Text></View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.three}><Text style={{ color: 'grey' }}>{email.message}</Text></View>
                            <View style={styles.four}><View style={styles.notificationCircle}><Text style={{ color: 'white', }}>{email.notification}</Text></View></View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        return (
            output
        )
    }
    
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.searchBar}>
                <TextInput style={styles.container} onChangeText={(text) => { setSearchBarInput(); apiCall(text) }} value={searchBarInput} placeholder={'Search & enter'} />
                <TouchableOpacity onPress={() => { clearSearchBarInput()}} style={{ justifyContent: 'center', marginRight: 10 }} >
                    <FeatherIcons style={{ fontSize: 20 }} name="x" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerBody}>
                {/* {individual_email(DATA[0])} */}
                <FlatList data={apiData} keyExtractor={(item) => (item.nid)} renderItem={({ item }) => (individual_email(item))} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBody: {
        flex: 10,
    },
    searchBar: {
        flexDirection: 'row',
    },
    item: {
        flexDirection: 'row',
        height: windowHeight * 0.12,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemIcon: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        flex: 4,
        alignSelf: 'stretch',
    },
    icon: {
        backgroundColor: 'orange',
        width: windowHeight * 0.09,
        height: windowHeight * 0.09,
        borderRadius: windowHeight * 0.09,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    one: {
        paddingLeft: 10,
        justifyContent: 'flex-end',
        marginBottom: 5,
        alignSelf: 'stretch',
        flex: 2,
    },
    two: {
        justifyContent: 'flex-end',
        marginBottom: 5,
        alignSelf: 'stretch',
        flex: 1,
    },
    three: {
        paddingLeft: 10,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        flex: 5,
    },
    four: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
    notificationCircle: {
        backgroundColor: 'red',
        height: windowHeight * 0.039,
        width: windowHeight * 0.039,
        borderRadius: windowHeight * 0.039,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default NotificationScreen;