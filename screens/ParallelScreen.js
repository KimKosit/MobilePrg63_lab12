import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button, Easing } from "react-native";

const ParallelScreen = (props) => {
  const translateAnim = useRef(new Animated.Value(0)).current;
  const springAnim = useRef(new Animated.Value(0.3)).current;

  const move = translateAnim.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, -50, 0, 50, 0],
  });

  // third menu
  const doParallel = () => {
    console.log("third menu");
    Animated.parallel([
      Animated.spring(springAnim, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(() => {
      springAnim.setValue(0.3);
      translateAnim.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Animated.Image
          style={[styles.imageStyle, { transform: [{ scale: springAnim }] }]}
          source={require("../assets/IT_Logo.png")}
        />
        <Animated.Text
          style={[styles.textStyle, { transform: [{ translateX: move }] }]}
        >
          Welcome to Faculty of IT!!
        </Animated.Text>
      </View>
      <Button title="Run Parallel" onPress={doParallel} />
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
  textStyle: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ParallelScreen;
