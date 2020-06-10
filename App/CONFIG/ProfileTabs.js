import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "../COMPONENTS/AboutComponent";
import Status from "../COMPONENTS/ProjectsComponents";
import Calls from "../COMPONENTS/GroupsComponent";
import FriendsComponents from "../COMPONENTS/FriendsComponent";
import GroupsComponents from "../COMPONENTS/GroupsComponent";

const Tabs = createMaterialTopTabNavigator({
  About: {
    screen: Home,
    navigationOptions: {
      tabBarTitle: "Home",
      tabBarIcon: ({ focused }) => <Icon name="ios-home" color={focused ? "#fff"  : "gray"} size={22} />
    },
  },
  Projects: {
    screen: Status,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Icon name="ios-compass" color={focused ? "#fff"  : "gray"} size={22} />
    },
  },
  Friends: {
    screen: FriendsComponents,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => <Icon name="ios-albums" color={focused ? "#fff"  : "gray"} size={22} />
    }
  },
  Groups: {
    screen: GroupsComponents,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => <Icon name="ios-albums" color={focused ? "#fff"  : "gray"} size={22} />
    }
  },
},
  {
    initialRouteName: 'About',
    tabBarPosition: 'top',
    swipeEnabled: true,
    lazyLoad: true,
    animationEnabled: true,
    tabBarOptions : {
      style : {
        backgroundColor : "#000",
        height : 50,
        borderTopWidth : 0.2,
        borderColor : "#333333"
        // paddingTop : 3,
        // paddingBottom : 3,
      },
      activeTintColor: "#fff",
      inactiveTintColor: "gray",
      indicatorStyle : {
        backgroundColor : "#ff5b77",
        elevation : 5,
        height : 3
      },
      labelStyle : {
        fontWeight : "bold"
      }
    }
  }
);


const ProfileScreenNavigator = createStackNavigator({
  Tab: {
    screen: Tabs,
    navigationOptions: {
      title: "BOOK STORE",
      headerLeft: <Icon style={{ paddingLeft: 22 }} name="ios-book" size={30} color="#fff" />,
      headerStyle: {
        backgroundColor: "#2b2b39",
      },
      headerTitleStyle: { color: "#fff",fontWeight : "bold" },
      header: null
    }
  }
});

export default createAppContainer(ProfileScreenNavigator);