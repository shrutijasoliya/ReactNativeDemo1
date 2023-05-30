import {StyleSheet, Text, View, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import SoundPlayer from 'react-native-sound-player';

const AudioPlayer = navigation => {
  console.log('AudioPlayer running..');
  useEffect(() => {
    playSong();
    getInfo();
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      stopSong,
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  const playSong = () => {
    try {
      SoundPlayer.playUrl(
        'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
      );
    } catch (e) {
      alert('Cannot play the file');
      console.log('cannot play the song file', e);
    }
  };
  const getInfo = async () => {
    // You need the keyword `async`
    try {
      const info = await SoundPlayer.getInfo(); // Also, you need to await this because it is async
      console.log('getInfo', info); // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e);
    }
  };
  const stopSong = () => {
    try {
      SoundPlayer.stop();
    } catch (e) {
      alert('Cannot play the file');
      console.log('error in stopeed playing the song file', e);
    }
  };
  return (
    <View>
      <Text style={styles.text}>AudioPlayer</Text>
    </View>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
    alignSelf:'center'
  },
});
