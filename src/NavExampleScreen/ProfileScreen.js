import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const ProfileScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: 'white',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            transform: [{ scale: scale }, { translateX: moveToRight }],
            borderRadius: showMenu ? 15 : 0
          }}>
          <View>
            <TouchableOpacity
              style={{ margin: 20 }}
              onPress={() => {
                Animated.timing(scale, {
                  toValue: showMenu ? 1 : 0.8,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(moveToRight, {
                  toValue: showMenu ? 1 : 240,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
              }}>
              <Image
                source={require('./../../assets/images/ic_left.png')}
                style={{ width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View></SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: RFValue(18),
    color: 'black',
  },
});
