import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import ImageFacebook from './../../assets/images/facebook.png';

const VideoPlayerComp = () => {
  return (
    <View>
      <Text style={styles.text}>VideoPlayer</Text>
      <VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        // videoWidth={1600}
        // videoHeight={900}
        showDuration={true}
        resizeMode="stretch"
        thumbnail={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
    </View>
  );
};

export default VideoPlayerComp;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
  },
});
