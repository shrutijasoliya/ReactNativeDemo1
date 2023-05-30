import {
  FlatList,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import CheckBox from 'react-native-check-box';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState, useEffect} from 'react';
import UserImage from './../../assets/images/user1.png';
import Tab1Image from './../../assets/images/tab1.png';
import Tab2Image from './../../assets/images/tab2.png';
import Tab3Image from './../../assets/images/tab3.png';
import Tab4Image from './../../assets/images/tab4.png';
import Tab1 from './TabNavigationScreens/Tab1';
import Tab2 from './TabNavigationScreens/Tab2';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const UITest = () => {
  const dispatch = useDispatch();
  const [isEnabled, setisEnabled] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setlist] = useState([]);

  const GoalItem = item => (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'column',
        borderColor: '#334b5f',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'white', fontSize: 14}}>{item.title}</Text>
        <Text style={{color: 'white', fontSize: 12}}>{item.time}</Text>
      </View>
      <Text style={{color: 'white', fontSize: 14}}>{item.desc}</Text>
    </View>
  );

  const Tab3 = () => (
    <View>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
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
          Add Todo's
        </Text>
      </View>
      <View style={{marginTop: 20, flexDirection: 'column'}}>
        <Text style={{color: 'white', fontSize: 14}}>Title</Text>
        <TextInput
          placeholder="Enter Title"
          placeholderTextColor="#8e9aad"
          value={title}
          onChangeText={text => setTitle(text)}
          style={styles.goalTextInput}
        />
      </View>
      <View style={{flexDirection: 'column', marginTop: 20}}>
        <Text style={{color: 'white', fontSize: 14}}>Description</Text>
        <TextInput
          placeholder="Enter Description"
          placeholderTextColor="#8e9aad"
          value={desc}
          onChangeText={text => setDesc(text)}
          style={styles.goalTextInput}></TextInput>
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#50c833',
            width: '100%',
            padding: 12,
            borderRadius: 4,
            alignItems: 'center',
          }}
          onPress={() => {
            const date = new Date();
            const AmPm = date.getHours() > 12 ? 'PM' : 'AM';
            const time = `${
              date.getHours() % 12
            } : ${date.getMinutes()} ${AmPm}`;
            setlist(prev => [...prev, {title: title, desc: desc, time: time}]);
            setTitle('');
            setDesc('');
            console.log('Time', time, AmPm);
            console.log('Title', title);
            console.log('Desc', desc);
            // console.log(list);
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const Tab4 = () => (
    <View>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
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
          Todo's
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <FlatList
          scrollEnabled={true}
          data={list}
          renderItem={({item}) => GoalItem(item)}
        />
      </View>
    </View>
  );

  return (
    <View style={{backgroundColor: '#0d2b3f', flex: 1}}>
      {/* Let's make today */}
      <View style={{marginTop: 25, paddingHorizontal: 20}}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
          Let's make today
        </Text>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
          count
        </Text>
      </View>
      {/* June 30th,2022 */}
      <View
        style={{
          marginTop: 25,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: 'white', fontSize: 14}}>June 30th,2022</Text>
          <Text style={{color: 'white', fontSize: 12}}>Welcome Back!</Text>
        </View>
        <Image source={UserImage} style={{height: 40, width: 40}}></Image>
      </View>
      {/* Cameron Williamson */}
      <View>
        <LinearGradient
          colors={isEnabled ? ['#3b5333', '#0b4c4e'] : ['#334b5f', '#334b5f']}
          style={{
            backgroundColor: isEnabled ? '#0b4c4e' : '#334b5f',
            borderRadius: 10,
            marginTop: 20,
            marginHorizontal: 20,
            padding: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Cameron Williamson
            </Text>
            <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>
              +91 9876543210
            </Text>
            <Text style={{color: '#50c833', fontSize: 12, marginTop: 5}}>
              Rs. 10,000.00
            </Text>
          </View>
          <View>
            <Switch
              value={isEnabled}
              onValueChange={() => {
                setisEnabled(previousState => !previousState);
              }}></Switch>
          </View>
        </LinearGradient>
      </View>
      {/* Tab Navigation */}
      <View style={{flex: 1, marginHorizontal: 20, marginTop: 5}}>
        <Tab.Navigator
          sceneContainerStyle={{backgroundColor: '#0D2A3F'}}
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#0D2A3F',
              shadowColor: 'transparent',
            },
            tabBarPressColor: 'transparent',
            tabBarIndicatorStyle: {
              backgroundColor: 'transparent',
            },
            tabBarShowLabel: false,
            tabBarContentContainerStyle: {height: 110},
          }}>
          <Tab.Screen
            name="Explore"
            component={Tab1}
            options={() => ({
              tabBarIcon: ({focused}) => {
                return (
                  <View
                    style={[
                      styles.tabTouchable,
                      {backgroundColor: focused ? '#50c833' : '#334b5f'},
                    ]}>
                    <Image
                      source={Tab1Image}
                      style={[
                        styles.tabImage,
                        {tintColor: focused ? 'white' : '#8e9aad'},
                      ]}></Image>
                  </View>
                );
              },
            })}
          />
          <Tab.Screen
            name="SelExplore"
            component={Tab2}
            options={() => ({
              tabBarIcon: ({focused}) => {
                return (
                  <View
                    style={[
                      styles.tabTouchable,
                      {backgroundColor: focused ? '#50c833' : '#334b5f'},
                    ]}
                    onPress={() => {
                      setbtnNo(1);
                    }}>
                    <Image
                      source={Tab2Image}
                      style={[
                        styles.tabImage,
                        {tintColor: focused ? 'white' : '#8e9aad'},
                      ]}></Image>
                  </View>
                );
              },
            })}
          />
          <Tab.Screen
            name="AddToDo"
            component={Tab3}
            options={() => ({
              tabBarIcon: ({focused}) => {
                return (
                  <View
                    style={[
                      styles.tabTouchable,
                      {backgroundColor: focused ? '#50c833' : '#334b5f'},
                    ]}
                    onPress={() => {
                      setbtnNo(2);
                    }}>
                    <Image
                      source={Tab3Image}
                      style={[
                        styles.tabImage,
                        {tintColor: focused ? 'white' : '#8e9aad'},
                      ]}></Image>
                  </View>
                );
              },
            })}
          />
          <Tab.Screen
            name="ToDo"
            component={Tab4}
            options={() => ({
              tabBarIcon: ({focused}) => {
                return (
                  <View
                    style={[
                      styles.tabTouchable,
                      {backgroundColor: focused ? '#50c833' : '#334b5f'},
                    ]}
                    onPress={() => {
                      setbtnNo(3);
                    }}>
                    <Image
                      source={Tab4Image}
                      style={[
                        styles.tabImage,
                        {tintColor: focused ? 'white' : '#8e9aad'},
                      ]}></Image>
                  </View>
                );
              },
            })}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default UITest;

const styles = StyleSheet.create({
  tabView: {
    alignSelf: 'center',
  },
  tabTouchable: {
    borderRadius: 7,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    paddingVertical: 32,
  },
  tabImage: {
    height: 20,
    width: 20,
    zIndex: 2,
  },

  goalTextInput: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 12,
    borderColor: '#8e9aad',
    backgroundColor: '#334b5f',
    marginTop: 5,
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
