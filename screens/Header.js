import React from 'react'; 
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation}) => {
    return(
        <View style={styles.containerHeader}>
            <TouchableOpacity onPress={() => {navigation.navigate('HomeScreen')}}>
                <Image 
                        style={styles.image}
                        source={require('../assets/finex_logo.png')} 
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.toggleDrawer()}}>
                <Icon style={styles.icon} name="settings-outline"/>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    containerHeader: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#474747',
      },
      image: {
          height: 70, 
          width: 70,
      },
      icon: {
          fontSize: 30,
          color: '#fff',
          marginRight: 20,
      }
})

export default Header;
