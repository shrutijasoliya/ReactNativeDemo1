import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Facebook from './../../assets/images/facebook.png';
import LoginScreen from './LoginPractice';

const WelcomeScreen = ({navigation}) => {
  const str = 'kdsfjnaklsf';
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionStart', e => {
      // Do something
      console.log('transition start');
      console.log('boolean : ', e.data.closing);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <View></View>
      <View style={styles.bgYellow}>
        <View style={styles.view1}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome</Text>
          <Text allowFontScaling={false} style={{marginTop: 10, fontSize: 12}}>
            {`Dummy text: { platform:iOS, ${str}id:dvtdevice-DVTiPhonePlaceholder-iphoneos:placeholder, name:Any iOS Device }`}
          </Text>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity
            onPress={() => {
              console.log('signin press');
              navigation.navigate('Login');
            }}
            style={[styles.btnLogIn, {backgroundColor: '#373737'}]}>
            <Text style={{color: 'white'}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DrawerNavExp');
            }}
            style={[styles.btnLogIn, {backgroundColor: 'white'}]}>
            <Text style={{color: 'black'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <Text style={{marginEnd: 5}}>Sign in with</Text>
          <TouchableOpacity>
            <Image source={Facebook} style={styles.btnFacebookStyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Facebook} style={styles.btnFacebookStyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Facebook} style={styles.btnFacebookStyle}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  bgYellow: {
    backgroundColor: '#ffd11e',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '50%',
    bottom: 0,
    position: 'absolute',
  },
  btnLogIn: {
    borderRadius: 25,
    marginHorizontal: 7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    elevation: 10,
    shadowOffset: {width: 0, height: 5},
    paddingVertical: 12,
  },
  view1: {
    marginTop: 30,
    marginHorizontal: 30,
    flex: 2,
    justifyContent: 'center',
  },
  view2: {
    marginHorizontal: 35,
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  view3: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  btnFacebookStyle: {
    width: 20,
    height: 20,
    marginStart: 5,
  },
});
