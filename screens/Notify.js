import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Header from './Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Notify = ({ route, navigation }) => {
    // const notificationData = { "nid": "1", "cid": "1", "letter": "O", header: "Asaleo Pty Ltd", time: "Oct 9, 08:00", message: "Pending Approval (Offering) INV123493, 15 Aug 2020" }
    const notificationData = route.params
    const colorpattern = { O: '#FE7F27', R: '#A348A4', A: '#00A2E8' }
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.containerBody}>
                <View style={styles.titleRow}>
                    <View style={styles.iconArea}> 
                        <View style={[styles.icon, {backgroundColor: colorpattern[notificationData.letter]}]}>
                            <Text style={styles.iconText}>{notificationData.letter}</Text>
                        </View>
                    </View>
                    <View style={styles.headerArea}>
                        <Text style={styles.headerText}>{notificationData.header}</Text>
                    </View>
                </View>
                <View style={styles.timeArea}>
                    <Text style={styles.timeText}>{notificationData.time}</Text>
                </View>
                <View style={styles.messageRow}>
                    <Text>{notificationData.message}</Text>
                </View>
            </View>
        </View>
    )
}

export default Notify;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBody: {
        flex: 10,
    },
    titleRow: {
        height: windowHeight/7.4,
        flexDirection: 'row',
        marginHorizontal: 10,
        borderBottomWidth: 1
    },
    messageRow: {
        flex: 1,
        paddingHorizontal: windowWidth /10,
        paddingVertical: 30,
    }, 
    iconArea: {
        width: windowWidth / 4.1,
        alignItems: 'center', 
        justifyContent: 'center',        
    }, 
    iconText: {
        fontWeight: 'bold', 
        fontSize: 35,
        color: 'white', 
    },  
    icon: {
        backgroundColor: 'orange',
        width: windowHeight * 0.11,
        height: windowHeight * 0.11,
        borderRadius: windowHeight * 0.11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerArea: {
        flex: 3, 
        paddingHorizontal: windowWidth / 27.4,
        justifyContent: 'center'
    }, 
    headerText: {
        fontWeight: 'bold', 
        fontSize: 30,
    }, 
    timeArea: {
        height: windowHeight /20,
        justifyContent: 'center', 
        marginHorizontal: 30,
    }, 
    timeText: {
        color: 'grey',
    }
})