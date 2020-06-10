import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import SettingsComponent from "../COMPONENTS/SettingsComponent";
import Header from "../COMPONENTS/Header";

class Settings extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <Header/>
                <SettingsComponent/>
            </View>
        )
    }
}

export default Settings;
 
const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : "#333333"
    }
})