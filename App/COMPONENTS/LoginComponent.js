import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: "",
            password : ""
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={["#000000", "#000000"]}
                    style={styles.linearGradientStyle}
                >
                    <Image
                        source = {require('../ASSESTS/logo.png')}
                        style= {styles.imageStyle}
                    />
                    <View style={styles.loginContainer}>
                        <TextInput
                            value={this.state.email}
                            placeholder="Enter email address....."
                            placeholderTextColor="#7f6b00"
                            style={styles.input}
                        />

                        <TextInput
                            value={this.state.password}
                            placeholder="Enter password....."
                            placeholderTextColor="#7f6b00"
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.loginBtn}>
                                <Text style={[styles.loginBtnText,{color:"#000",fontWeight:"bold",fontSize:18}]}>Login</Text>
                            
                        </TouchableOpacity>
                        <View style={styles.options}>
                            <TouchableOpacity>
                                <Text style={styles.loginBtnText}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.loginBtnText}>Forget Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

export default LoginComponent;

const styles = StyleSheet.create({
    linearGradientStyle: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginContainer: {
        height: "50%",
        padding: 20
    },
    input: {
        backgroundColor: "#333333",
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        borderWidth: 0.5,
        borderColor: "#FFD700",
        color: "#FFD700",
        marginBottom : 10
    },
    imageStyle : {
        height : 250,
        width : 200,
        alignSelf : "center",
        marginBottom : 50
    },
    loginBtn : {
        width : "100%",
        height : 50,
        borderRadius : 10,
        justifyContent : "center",
        alignItems : "center",
        alignContent : "center",
        marginBottom : 5,
        backgroundColor : "#e5c100"
    },
    loginBtnText : {
        color : "#e5e5e5",
        fontSize : 16
    },
    options : {
        flexDirection : "row",
        justifyContent : "space-between",
        padding : 5
    }
})