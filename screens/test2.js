import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

const test2 = ({route, navigation}) => {
    console.log(route.params)
    const item = route.params
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', }}>
                <Text style={styles.title}>Test 2</Text>
            </View>
            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', borderWidth: 1, borderColor: 'black' }}>
                <View> 
                    <Text>Movie Title: {item.title}</Text>
                    <Text>Ratting: {item.reviews}</Text>
                    <Text>Release Year: {item.year}</Text>

                </View>
                <Button title="go back to previous page" onPress={() => { navigation.navigate('test1') }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
    }
})


export default test2;