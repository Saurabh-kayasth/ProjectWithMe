import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import ProfileScreenNavigator from '../CONFIG/ProfileTabs';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../ASSESTS/logo.png')}
            style={styles.imageStyle}
          />
          <View style={styles.followContainer}>
            <View style={styles.followLeft}>
              <Text style={styles.heading}>Followers</Text>
              <Text style={styles.number}>1234</Text>
            </View>
            <View style={styles.followRight}>
              <Text style={styles.heading}>Following</Text>
              <Text style={styles.number}>1234</Text>
            </View>
          </View>
        </View>

        <ProfileScreenNavigator />
      </View>
    );
  }
}

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
    height: 140,
    padding: 20,
    flexDirection: 'row',
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff5b77',
  },
  name: {
    color: 'gray',
    position: 'absolute',
    top: 65,
    left: 140,
    fontSize: 20,
  },
  followContainer: {
    width: '80%',
    height: 100,
    padding: 0,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  followLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '50%',
  },
  followRight: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '50%',
  },
  heading: {
    fontSize: 16,
    color: 'gray',
  },
  number: {
    fontSize: 18,
    color: '#fff',
  },
});
