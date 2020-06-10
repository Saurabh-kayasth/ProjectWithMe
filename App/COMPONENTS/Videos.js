import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

class VideoData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageStyle}
          source={require('../ASSESTS/p22.jpg')}>
          <LinearGradient
            colors={['#000000', '#cc000000']}
            style={styles.topContainer}>
            <View style={styles.topRight}>
              <View style={styles.profileContainer}>
                <Image
                  style={styles.profileStyle}
                  source={require('../ASSESTS/logo.png')}
                />
                <View style={styles.iconContainer}>
                  <Icon name="ios-add" size={20} color="#fff" />
                </View>
              </View>
            </View>
            <View style={styles.topLeft}>
              <View style={styles.topInner}>
                <Text style={styles.channel}>@i.am.saurabh.kayasth</Text>
                <Text style={styles.content}>
                  Sometimes you just have to play the role of a fool to fool the
                  fool who thinks they are fooling you....
                </Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.middleContainer} />
          <LinearGradient
            colors={['#cc000000', '#000000']}
            style={styles.bottomContainer}>
            <TouchableOpacity style={styles.bottomInner}>
              <Icon name="ios-heart" color="#fff" size={30} />
              <Text style={styles.bottomInnerText}>1234</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomInner}>
              <Icon name="ios-chatboxes" color="#fff" size={30} />
              <Text style={styles.bottomInnerText}>1234</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomInner}>
              <Icon name="md-share" color="#fff" size={30} />
              <Text style={styles.bottomInnerText}>1234</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomInner}>
              <Icon name="md-chatboxes" color="#fff" size={30} />
              <Text style={styles.bottomInnerText}>1234</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

class Videos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let datasource = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
      <View style={{height: height}}>
        <FlatList
          pagingEnabled={true}
          data={datasource}
          renderItem={({item, index}) => {
            return <VideoData />;
          }}
        />
      </View>
    );
  }
}

export default Videos;
const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: height,
    width: '100%',
  },
  topContainer: {
    backgroundColor: 'transparent',
    height: 100,
    flexDirection: 'row',
  },
  topLeft: {
    width: '80%',
  },
  topRight: {
    width: '20%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 15,
  },
  profileContainer: {
    height: 50,
    width: 50,
  },
  profileStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  iconContainer: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: '#ff5b77',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: -5,
  },
  topInner: {
    width: '100%',
    padding: 10,
    height: '42%',
  },
  channel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 15,
    color: '#e5e5e5',
  },
  //MIDDLE CONTAINER
  middleContainer: {},
  //BOTTOM CONTAINER
  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  bottomInner: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  bottomInnerText: {
    color: '#fff',
    textAlign: 'center',
  },
});
