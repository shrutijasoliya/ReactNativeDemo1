import {StyleSheet, Animated, Image, View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Practice from './src/screens/Practice';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginPractice';
import UITest from './src/screens/UITest';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavExp from './src/screens/DrawerNavExp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HomeScreen2 from './src/NavExampleScreen/HomeScreen';
import RestaurantScreen from './src/NavExampleScreen/RestaurantScreen';
import SearchScreen from './src/NavExampleScreen/SearchScreen';
import ProfileScreen from './src/NavExampleScreen/ProfileScreen';
import HomeImg from './assets/images/HomeImg.png';
import RestaurantImg from './assets/images/RestaurantImg.png';
import SearchImg from './assets/images/SearchImg.png';
import ProfileImg from './assets/images/ProfileImg.png';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from './src/NavExampleScreen/DrawerComponent';
// import LoginContext from './store/context/login-context';
import {Provider} from 'react-redux';
// import {store} from './store/redux/store';
import {useSelector} from 'react-redux';
import {reducer} from './store/redux/reducer';
import {myStore} from './store/reduxToolkit/myStore';
import store from './store/reduxSaga/storeSaga';
import Permissions from './src/screens/Permissions';
import UseCamera from './src/screens/UseCamera';
import AudioPlayer from './src/screens/AudioPlayer';
import VideoPlayerComp from './src/screens/VideoPlayerComp';
import ModalExp from './src/screens/ModalExp';
import DocumentPickerExp from './src/screens/DocumentPickerExp';
import {myTheme} from './src/Themes/myTheme';
import {
  Provider as PaperProvider,
  DefaultTheme,
  useTheme,
} from 'react-native-paper';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: '90%',
          borderTopRightRadius: RFValue(30),
          borderBottomRightRadius: RFValue(30),
        },
      }}
      drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name="HomeScreen2" component={HomeScreen2} />
      <Drawer.Screen name="HSA" component={HSA} />
      <Drawer.Screen name="DisCard" component={DisCard} />
      <Drawer.Screen name="Permissions" component={Permissions} />
      <Drawer.Screen name="UseCamera" component={UseCamera} />
      <Drawer.Screen name="AudioPlayer" component={AudioPlayer} />
      <Drawer.Screen name="VideoPlayerComp" component={VideoPlayerComp} />
      <Drawer.Screen name="ModalExp" component={ModalExp} />
      <Drawer.Screen name="DocumentPickerExp" component={DocumentPickerExp} />
    </Drawer.Navigator>
  );
};

const HSA = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HSA, Infertility report!!</Text>
    </View>
  );
};

const DisCard = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Discharge card!!</Text>
    </View>
  );
};

const XYZ = () => {
  const theme = useTheme();
  const [second, setSecond] = useState(true);
  // const state = useSelector(state => state);
  // const second = state.second;

  // function setSecondTrue() {
  //   setSecond(true);
  //   console.log('second value: ', second);
  // }

  // function setSecondFalse() {
  //   setSecond(false);
  //   console.log('second value: ', second);
  // }

  // const value = {
  //   secondValue: second,
  //   setSecondTrue: setSecondTrue,
  //   setSecondFalse: setSecondFalse,
  // };

  useEffect(() => {
    // Text.defaultProps=Text.defaultProps || {};
    // Text.defaultProps.style={fontFamily: myTheme.fontFamily}
    console.log('second in app: ', second);
  }, []);

  const forSlide = ({current, next, inverted, layouts: {screen}}) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        : 0,
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width, // Focused, but offscreen in the beginning
                  0, // Fully focused
                  screen.width * -0.3, // Fully unfocused
                ],
                extrapolate: 'clamp',
              }),
              inverted,
            ),
          },
        ],
      },
    };
  };

  return (
    <NavigationContainer theme={myTheme}>
      <PaperProvider theme={myTheme}>
        {second ? (
          <Tab.Navigator
            sceneContainerStyle={{backgroundColor: '#edf0eb'}}
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#18204a',
              tabBarInactiveTintColor: '#565b79',
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: '#edf0eb',
                height: 70,
                shadowColor: 'transparent',
              },
            }}>
            <Tab.Screen
              name="MyDrawer"
              component={MyDrawer}
              options={() => ({
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={styles.tabBarIconView}>
                      <Image
                        style={[
                          styles.tabBarIcon,
                          {tintColor: focused ? '#18204a' : '#565b79'},
                        ]}
                        source={HomeImg}
                      />
                      <Text
                        style={[
                          styles.tabBarLabel,
                          {color: focused ? '#18204a' : '#565b79'},
                          {fontFamily: theme.fonts.bold},
                        ]}>
                        Home
                      </Text>
                    </View>
                  );
                },
                title: 'Home',
              })}
            />
            <Tab.Screen
              name="RestaurantScreen"
              component={RestaurantScreen}
              options={() => ({
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={styles.tabBarIconView}>
                      <Image
                        style={[
                          styles.tabBarIcon,
                          {tintColor: focused ? '#18204a' : '#565b79'},
                        ]}
                        source={RestaurantImg}
                      />
                      <Text
                        style={[
                          styles.tabBarLabel,
                          {color: focused ? '#18204a' : '#565b79'},
                        ]}>
                        Restaurants
                      </Text>
                    </View>
                  );
                },

                title: 'Restaurants',
              })}
            />
            <Tab.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={() => ({
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={styles.tabBarIconView}>
                      <Image
                        style={[
                          styles.tabBarIcon,
                          {tintColor: focused ? '#18204a' : '#565b79'},
                        ]}
                        source={SearchImg}
                      />
                      <Text
                        style={[
                          styles.tabBarLabel,
                          {color: focused ? '#18204a' : '#565b79'},
                        ]}>
                        Search
                      </Text>
                    </View>
                  );
                },
                title: 'Search',
              })}
            />
            <Tab.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={() => ({
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={styles.tabBarIconView}>
                      <Image
                        style={[
                          styles.tabBarIcon,
                          {tintColor: focused ? '#18204a' : '#565b79'},
                        ]}
                        source={ProfileImg}
                      />
                      <Text
                        style={[
                          styles.tabBarLabel,
                          {color: focused ? '#18204a' : '#565b79'},
                        ]}>
                        Profile
                      </Text>
                    </View>
                  );
                },
                title: 'Profile',
              })}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: true,
              cardStyleInterpolator: forSlide,
            }}>
            <Stack.Screen name="Home" component={UITest} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="DrawerNavExp" component={DrawerNavExp} />
          </Stack.Navigator>
        )}
      </PaperProvider>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    // <LoginContext.Provider value={value}>
    <Provider store={store}>
      <XYZ />
    </Provider>
    // </LoginContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBarIconView: {
    alignItems: 'center',
  },
  tabBarIcon: {
    width: RFValue(16),
    height: RFValue(16),
  },
  tabBarLabel: {
    marginTop: 5,
    fontSize: RFValue(11),
  },
});
