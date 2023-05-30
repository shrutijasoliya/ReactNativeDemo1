import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';
import LoginContext from '../../store/context/login-context';
import {useDispatch, useSelector} from 'react-redux';
import {setSecondFalse, setSecondTrue} from '../../store/redux/action';
import {fetchData} from '../../store/reduxSaga/actionSaga';
import {getUserRequest} from '../../store/reduxSaga/actionSaga';

import Permissions, {
  requestCameraPermission,
  requestLocationPermission,
} from '../screens/Permissions';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  // const loginCtx = useContext(LoginContext);
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user);
  // const isLoading = user.isLoading;

  // const state = useSelector(state => state);
  // const second = state.second;
  // const second = loginCtx.secondValue;


  const fetchDataReduxSaga = () => {
    dispatch(getUserRequest());
  };

  function changeSecondHandlerContext() {
    console.log('on press : ');
    if (second) {
      loginCtx.setSecondFalse();
      console.log('changeSecondHandler2 called', second);
    } else {
      loginCtx.setSecondTrue();
      console.log('changeSecondHandler2 called', second);
    }
  }

  function changeSecondHandlerRedux() {
    console.log('on press(redux) : ', second);
    if (second) {
      dispatch(setSecondFalse());
      console.log('on press34', second);
    } else {
      dispatch(setSecondTrue());
    }
  }

  const getUsersFetch = () => {
    // const data=await fetch("https://jsonplaceholder.typicode.com/users");
    // const json=await data.json();
    // console.log(json);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        console.log('fetched data: ', responseJson);
      })
      .catch(error => console.error('get using fetch', error));
  };

  const fetchDataAxios = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
        console.log('fetched data using axios: ', response.data);
      })
      .catch(error => console.error('get using axios', error));
  };

  const addDataFetch = (name, email) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: {
        name: {name},
        email: {email},
      },
    })
      .then(response => {
        console.log(response.status);
        return response.json();
      })
      .then(responseJson => {
        console.log(JSON.stringify(responseJson));
      })
      .catch(error => console.error('post: ', error));
  };

  const addDataAxios = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        amount: 6050,
        currency: 'INR',
      })
      .then(response => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch(error => console.error('post axios : ', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Get Current Location"
        onPress={() => {
          navigation.navigate('Permissions');
        }}></Button>
      <Button
        title="Try camera"
        onPress={() => {
          navigation.navigate('UseCamera');
        }}></Button>
      <Button
        title="Try audio"
        onPress={() => {
          navigation.navigate('AudioPlayer');
        }}></Button>
      <Button
        title="Try video"
        onPress={() => {
          navigation.navigate('VideoPlayerComp');
        }}></Button>
      <Button
        title="Try Model"
        onPress={() => {
          navigation.navigate('ModalExp');
        }}></Button>
      <Button
        title="Document Picker"
        onPress={() => {
          navigation.navigate('DocumentPickerExp');
        }}></Button>

      {/* <FlatList
//         data={user.data}
//         renderItem={data => {
//           return (
//             <TouchableOpacity
//               style={{
//                 margin: RFValue(10),
//                 backgroundColor: 'white',
//                 padding: RFValue(10),
//                 // }}
//                 // onPress={() => {
//                 //   addData(data.item.name, data.item.email);
//               }}>
//               <Text style={styles.text}>Name: {data.item.name}</Text>
//               <Text style={styles.text}>Email: {data.item.email}</Text>
//             </TouchableOpacity>
//           );
//         }}
//         keyExtractor={data => data.id.toString()}></FlatList> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(18),
    color: 'black',
    fontFamily: 'Caveat-Bold',
  },
});
