import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class GroupsComponents extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let data = [1,1,1,1,1,1,1,1,1]
        return (
            <View style={styles.container}>
                <FlatList
                    data = {data}
                    renderItem = {({item,index}) => {
                        return (
                            <TouchableOpacity style={styles.groupContainer}>
                                <Image
                                    source = {require('../ASSESTS/p2.jpg')}
                                    style = {styles.imageStyle}
                                />
                                <View style={styles.dataContainer}>
                                    <Text style={styles.name}>Group Name</Text>
                                    <Text style={styles.namelastmsg}>Last message....</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <TouchableOpacity style={styles.addGroup}>
                    <Icon name="ios-add" size={40} color="#fff"/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default GroupsComponents;
 
const styles = StyleSheet.create({
    container : {
        height : "100%",
        backgroundColor : "#333333"
    },
    groupContainer : {
        height : 60,
        margin : 10,
        marginBottom : 0,
        flexDirection : "row",
        borderRadius : 10,
        overflow : "hidden",
        borderBottomWidth : 0.1,
        borderBottomColor : "gray"
    },
    imageStyle : {
        height : 50,
        width : 50,
        borderRadius : 25
    },
    dataContainer : {
        padding : 5,
        paddingLeft : 10,
        width : "80%"
    },
    name : {
        fontSize : 15,
        color : "#e5e5e5",
        fontWeight : "normal",
    },
    namelastmsg : {
        fontSize : 15,
        color : "gray",
    },
    addGroup : {
        position : "absolute",
        bottom : 20,
        right : 20,
        height : 50,
        width : 50,
        borderRadius : 25,
        backgroundColor : "#ff5b77",
        elevation : 10,
        justifyContent : "center",
        alignItems : "center",
        alignContent : "center"
    }
})