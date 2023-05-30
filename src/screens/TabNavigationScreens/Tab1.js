import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Logo1 from './../../../assets/images/logo1.png';
import Logo2 from './../../../assets/images/logo2.png';
import Logo3 from './../../../assets/images/logo3.png';
import TimeLogo from './../../../assets/images/timeLogo.png';
import {useDispatch, useSelector} from 'react-redux';
import {
  addExploreToSelected,
  removeExploreFromSelected,
} from '../../../store/reduxToolkit/selectedExploreSlice';
import {
  getUserRequest,
  toggleIsChecked,
} from '../../../store/reduxSaga/actionSaga';

const Tab1 = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      discription:
        'Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text ',
      datetime: '28/06/2022 10:00 AM',
      ischecked: false,
      image: Logo1,
    },
    {
      id: 1,
      name: 'Hellena John',
      email: 'hellena.john@example.com',
      discription:
        'Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text ',
      datetime: '28/06/2022 10:00 AM',
      ischecked: false,
      image: Logo2,
    },
    {
      id: 2,
      name: 'Hellen Jummy',
      email: 'hellen.jummy@example.com',
      discription:
        'Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text ',
      datetime: '28/06/2022 10:00 AM',
      ischecked: false,
      image: Logo3,
    },
  ]);

  useEffect(() => {
    getUserInstaReduxSaga();
  }, []);

  const getUserInstaReduxSaga = () => {
    dispatch(getUserRequest());
  };
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  // console.log('users using saga api = ', user.data);
  const isLoading = user.isLoading;
  console.log('isLoading.. : ', isLoading);
  // const error = useSelector(state => state.user.error);

  const MsgItem = (item, index) => {
    // console.log('ischecked:', item.ischecked);
    return (
      <View style={styles.msgView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{uri: item.user.profile}}
              style={{width: 30, height: 30}}></Image>
            <View style={{marginLeft: 5}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>
                {item.user.name}
              </Text>
              <Text style={{color: 'white', fontSize: 10}}>
                {item.descriptions}
              </Text>
            </View>
          </View>
          <View>
            <CheckBox
              value={item.ischecked}
              onValueChange={val => {
                console.log('dispatching toggleIsChecked...');
                dispatch(toggleIsChecked(item.id));
                if (val) {
                  console.log('true/false 1 : ', val);
                  dispatch(addExploreToSelected({...item, ischecked: true}));
                } else {
                  console.log('true/false 2 : ', val);
                  console.log('remove item');
                  dispatch(removeExploreFromSelected(item.id));
                }
              }}
              tintColor="white"
            />
          </View>
        </View>
        <View>
          <Text style={{color: 'white', fontSize: 10, marginTop: 5}}>
            {item.hashtags}
          </Text>
        </View>
        <View
          style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={TimeLogo} style={{width: 12, height: 12}}></Image>
          <Text style={{color: 'white', fontSize: 11, marginLeft: 5}}>
            {item.date_time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#0D2A3F', paddingBottom: 20}}>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#50c833"
          style={{alignItems: 'center', justifyContent: 'center'}}
        />
      )}
      <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
        <View
          style={{
            backgroundColor: '#50c833',
            width: 3,
            borderRadius: 3,
          }}></View>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>
          Explore
        </Text>
      </View>
      <FlatList
        data={user.data}
        renderItem={({item, index}) => MsgItem(item, index)}
      />
    </View>
  );
};

export default Tab1;

const styles = StyleSheet.create({
  msgView: {
    backgroundColor: '#334b5f',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
