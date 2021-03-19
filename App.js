import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import DetailScreen from './screens/DetailScreen';
import OverviewScreen from './screens/OverviewScreen';
import NotificationScreen from './screens/NotificationScreen';
import Notify from './screens/Notify'
import SignUpScreen from './screens/SignUpScreen';
import test2 from './screens/test2';
import Example from './screens/Example';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerStack = ({navigation}) => (
  <Drawer.Navigator
    drawerPosition='right'
  >
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    <Drawer.Screen name="OverviewScreen" component={OverviewScreen} />
    <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
    {/* <Drawer.Screen name="test2" component={test2} /> */}
    {/* <Drawer.Screen name="Example" component={Example} /> */}
  </Drawer.Navigator>
)


const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="DrawerStack" component={DrawerStack} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="DetailScreen" component={DetailScreen} />
        <RootStack.Screen name="Notify" component={Notify} />


      </RootStack.Navigator>

    </NavigationContainer>
  )
}

export default App;