import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";

const SpringScreen = (props) => {
  const springAnim = useRef(new Animated.Value(0.3)).current;

  // first menu
  const spring = () => {
    console.log("first menu");
    Animated.spring(springAnim, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start(() => {
      springAnim.setValue(0.3);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Animated.Image
          style={[styles.imageStyle, { transform: [{ scale: springAnim }] }]}
          source={require("../assets/IT_Logo.png")}
        />
      </View>
      <Button title="Spring" onPress={spring} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 180,
    height: 150,
  },
});

export default SpringScreen;
