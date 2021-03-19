import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import FeatherIcons from 'react-native-vector-icons/Feather';


const Example = () => {
  const ballAnimation = useRef(new Animated.Value(0)).current;
  var status_open = true 


  const rotateLeft = () => {
    // Close
    status_open = true
    Animated.timing(ballAnimation, {
      toValue: 180,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const rotateRight = () => {
    // Open
    status_open = false
    Animated.timing(ballAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const toggleRotate = () => {
    console.log(status_open)
    if ( status_open ){
      console.log("right")
      rotateRight()
    }else {
      console.log("left")
      rotateLeft()
    }
  }


  const ballIntrepolate = ballAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "-180deg"],
  })




  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {
        transform: [
          {
            rotate: ballIntrepolate,
          }
        ]
      }]}>
        <FeatherIcons style={{ fontSize: 20 }} name="chevron-down" />
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Open" onPress={rotateLeft} />
        <Button title="Close" onPress={rotateRight} />
        <Button title="Toggle" onPress={toggleRotate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  },
  box: {
    backgroundColor: 'grey',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Example;