import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "../SCREENS/Home";
import Profile from "../SCREENS/Profile";
import Settings from "../SCREENS/Settings";

import {
  Image
} from "react-native";
const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarTitle: "Home",
      tabBarIcon: ({ focused }) => <Icon name="ios-home" color={focused ? "#fff"  : "gray"} size={22} />
    },
  },
  Discover: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Icon name="ios-compass" color={focused ? "#fff"  : "gray"} size={22} />
    },
  },
  Me: {
    screen: Profile,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => <Icon name="ios-person" color={focused ? "#fff"  : "gray"} size={25} />
    }
  },
  Inbox: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Icon name="ios-mail" color={focused ? "#fff"  : "gray"} size={22} />
    }
  },
  Setting: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Icon name="ios-settings" color={focused ? "#fff"  : "gray"} size={22} />
    }
  },

},
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    lazyLoad: true,
    animationEnabled: true,
    tabBarOptions : {
      style : {
        backgroundColor : "#000",
        height : 50,
        paddingTop : 3,
        borderTopWidth : 0,
        paddingBottom : 3
      },
      activeTintColor: "#fff",
      inactiveTintColor: "gray",
    }
  }
);


const MainScreenNavigator = createStackNavigator({
  Tab: {
    screen: Tabs,
    navigationOptions: {
      title: "BOOK STORE",
      headerLeft: <Icon style={{ paddingLeft: 22 }} name="ios-book" size={30} color="#fff" />,
      headerStyle: {
        backgroundColor: "#2b2b39",
      },
      headerTitleStyle: { color: "#fff" },
      header: null
    }
  }
});

export default createAppContainer(MainScreenNavigator);