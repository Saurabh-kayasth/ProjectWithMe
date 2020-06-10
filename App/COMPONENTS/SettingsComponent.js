import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SettingsComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style= {styles.container}>
                <TouchableOpacity style={styles.fieldContainer}>
                    <View style={styles.iconContainer}>
                    <Icon
                        name = "ios-key"
                        color = "#fff"
                        size = {20}
                    />
                    </View>
                    
                    <Text style={styles.text}>Reset Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fieldContainer}>
                    <View style={styles.iconContainer}>
                    <Icon
                        name = "ios-help"
                        color = "#fff"
                        size = {35}
                    />
                    </View>
                    
                    <Text style={styles.text}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fieldContainer}>
                    <View style={styles.iconContainer}>
                    <Icon
                        name = "ios-trash"
                        color = "#fff"
                        size = {20}
                    />
                    </View>
                    
                    <Text style={styles.text}>Remove Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fieldContainer}>
                    <View style={styles.iconContainer}>
                    <Icon
                        name = "md-log-out"
                        color = "#fff"
                        size = {20}
                    />
                    </View>
                    
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SettingsComponent;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#333333"
    },
    fieldContainer : {
        flexDirection : "row",
        padding : 10,
        alignContent :"center",
        alignItems : "center",
        backgroundColor : "#333333",
        borderBottomWidth : 0.35,
        borderBottomColor : "gray",
    },
    iconContainer : {
        width : 40,
        height : 40,
        borderRadius : 20,
        backgroundColor : "#000",
        elevation : 5,
        alignItems : "center",
        alignContent : "center",
        justifyContent : "center",
    },
    text : {
        color : "#e5e5e5",
        fontSize : 18,
        paddingLeft :15,
        letterSpacing : 1,
        fontWeight : "400"
    }
})