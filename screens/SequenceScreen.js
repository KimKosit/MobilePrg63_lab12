import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button, Easing } from "react-native";

const SequenceScreen = (props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const spin = rotateAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });

  const opacity = opacityAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });

  // second menu
  const doSequence = () => {
    console.log("second menu");
    Animated.sequence([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      rotateAnim.setValue(0);
      opacityAnim.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Animated.Image
          style={[
            styles.imageStyle,
            { transform: [{ rotate: spin }] },
            { opacity: opacity },
          ]}
          source={require("../assets/IT_Logo.png")}
        />
      </View>
      <Button title="Run Sequence" onPress={doSequence} />
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

export default SequenceScreen;
