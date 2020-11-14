import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import React from "react";

import { Ionicons } from "@expo/vector-icons";
import SpringScreen from "../screens/SpringScreen";
import SequenceScreen from "../screens/SequenceScreen";
import ParallelScreen from "../screens/ParallelScreen";

const AnimationTabNavigator = createBottomTabNavigator(
  {
    Spring: {
      screen: SpringScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-analytics"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Sequence: {
      screen: SequenceScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-menu" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Parallel: {
      screen: ParallelScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-git-merge"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "orange",
      backgroundColor: "white",
    },
  }
);

export default createAppContainer(AnimationTabNavigator);
