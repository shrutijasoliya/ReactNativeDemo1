import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let imagePath;

const UseCamera = () => {
  const navigation = useNavigation();
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log('Camera permission status', permission);
      if (permission === 'denied') {
        await Linking.openSettings();
      }
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log('path', photo.path);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={{height: windowHeight, width: windowWidth}}
            device={device}
            isActive={showCamera}
            photo={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}></TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <View>
            {imageSource !== '' ? (
              <Image
                height="100%"
                width="100%"
                style={{aspectRatio: 9 / 15}}
                source={{uri: `file://${imageSource}`}}
              />
            ) : null}
            <View style={styles.backButton}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#fff',
                  width: 100,
                }}
                onPress={() => {
                  navigation.navigate('HomeScreen2');
                }}>
                <Text style={{color: 'white', fontWeight: '500'}}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.retakeButton}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#fff',
                  width: 100,
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: 'white', fontWeight: '500'}}>Retake</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default UseCamera;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {backgroundColor: 'gray'},
  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    padding: 20,
    left: 0,
  },
  retakeButton: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    padding: 20,
    right: 0,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    left: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  image: {width: 500, height: 500},
});
