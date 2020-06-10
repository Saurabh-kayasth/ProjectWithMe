import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class AboutComponents extends Component {
    constructor(props) {
        super(props);
    }

    dataRenderer = (iconName, heading, data) => {
        return (
            <View>
                <View style={styles.fieldContainer}>
                    <View style={styles.leftContainer}>
                        <Icon name={iconName} size={20} color="#fff" />
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.heading}>{heading}</Text>
                        <Text style={styles.text}>{data}</Text>
                    </View>
                </View>
                <View style={styles.divider}></View>
            </View>
        )
    }

    render() {
        let data = [
            {
                iconName: "ios-person",
                heading: "Name",
                data: "Saurabh Kayasth"
            },
            {
                iconName: "ios-mail",
                heading: "Email",
                data: "i.am.saurabh.kayasth@gmail.com"
            },
            {
                iconName: "ios-contact",
                heading: "Contact",
                data: "8655237533"
            },
            {
                iconName: "ios-person",
                heading: "Age",
                data: "21"
            },
            {
                iconName: "ios-details",
                heading: "Number Of Projects",
                data: "12"
            },
            
        ]
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return this.dataRenderer(item.iconName, item.heading, item.data)
                    }}
                />

                <TouchableOpacity style={styles.edit}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default AboutComponents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333"
    },
    fieldContainer: {
        flexDirection: "row",
        padding: 10,
    },
    leftContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "#000",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        elevation : 5
    },
    rightContainer: {
        paddingLeft: 10
    },
    heading: {
        fontSize: 12,
        color: "gray",
    },
    text: {
        fontSize: 17,
        color: "#e5e5e5"
    },
    divider: {
        height: 0.4,
        backgroundColor: "gray",
        width: "100%"
    },
    edit : {
        width : "40%",
        height : 40,
        borderRadius : 10,
        backgroundColor : "#000",
        elevation : 10,
        justifyContent : "center",
        alignItems : "center",
        alignContent : "center",
        alignSelf : "center",
        marginTop : 0,
        position : "absolute",
        top : 320,
        borderWidth : 0.3,
        borderColor : "gray"
    },
    editText : {
        color : "#fff",
        fontSize : 16,
        textAlign : "center"
    }
})