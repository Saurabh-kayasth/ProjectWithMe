import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

class ProjectsComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = [1, 1, 1, 1, 1, 1];
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.projectContainer}>
                <Image
                  source={require('../ASSESTS/cover.png')}
                  style={styles.imageStyle}
                />
                <View style={styles.dataContainer}>
                  <Text style={styles.projectName}>Project Name</Text>
                  <Text style={styles.description}>
                    This is a chat based application with advanced security
                    parameters...
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default ProjectsComponents;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#333333',
  },
  projectContainer: {
    height: 100,
    margin: 5,
    // width : "100%",
    marginBottom: 0,
    backgroundColor: '#282828',
    elevation: 0,
    flexDirection: 'row',
    // borderRadius : 10,
    overflow: 'hidden',
  },
  imageStyle: {
    height: 100,
    width: 170,
  },
  dataContainer: {
    padding: 5,
    paddingLeft: 10,
    width: '55%',
  },
  projectName: {
    fontSize: 18,
    color: '#e5e5e5',
    fontWeight: 'normal',
  },
  description: {
    fontSize: 15,
    color: 'gray',
  },
});
