import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Background from './../../assets/images/bg.png';
import UserNameImage from './../../assets/images/user.png';
import PasswordImage from './../../assets/images/password.png';
import WelcomeScreen from './WelcomeScreen';

const LoginPractice = ({navigation}) => {
  const [text, setText] = useState('');
  const [pass, setPassword] = useState('');
  return (
    <View>
      <ImageBackground
        source={Background}
        resizeMode="stretch"
        style={{height: '100%', width: '100%'}}>
        <View style={styles.loginContainer}>
          <View style={styles.userInputStyle}>
            <View style={{flex: 1}}>
              <Image
                source={UserNameImage}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'grey',
                }}
              />
            </View>
            <TextInput
              textContentType="name"
              value={text}
              onChangeText={text => {
                console.log(text);
                setText(text);
              }}
              placeholder="Enter Username"
              style={{height: 40, flex: 8}}
            />
          </View>
          <View style={styles.userInputStyle}>
            <View style={{flex: 1}}>
              <Image
                source={PasswordImage}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'grey',
                }}
              />
            </View>
            <TextInput
              secureTextEntry={true}
              value={pass}
              onChangeText={pass => {
                console.log(pass);
                setPassword(pass);
              }}
              placeholder="Enter Password"
              style={{height: 40, flex: 8}}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: '#47c153',
              borderRadius: 20,
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                paddingVertical: 12,
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 1,
                elevation: 5,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 0,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{}}>Go back to first page</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginPractice;

const styles = StyleSheet.create({
  loginContainer: {
    marginStart: Platform.OS === 'ios' ? 28 : 30,
    height: '48%',
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 27,
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 30,
    marginBottom: Platform.OS === 'ios' ? 45 : 52,
  },
  userInputStyle: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
