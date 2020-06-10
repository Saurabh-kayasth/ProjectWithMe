import React,{Component} from 'react';
import {
  View,
  Text,
  StatusBar
} from "react-native";
import LoginComponent from "./App/COMPONENTS/LoginComponent";
import MainScreenNavigator from "./App/CONFIG/Router";
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : true
    }
  }

  render(){
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor="#000000" barStyle="light-content"/>
        {
          this.state.isLoggedIn ?
          <MainScreenNavigator/>:
          <LoginComponent/>
        }
      </View>
    )
  }
}

export default Main;