import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ProfileComponent from "../COMPONENTS/ProfileComponent";

class Profile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <ProfileComponent/>
            </View>
        )
    }
}

export default Profile;

const styles =StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#333333"
    }
});