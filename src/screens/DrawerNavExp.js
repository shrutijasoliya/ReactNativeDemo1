import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Profile = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!!</Text>
        </View>
    );
};

const Setting = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting!!</Text>
        </View>
    );
};

const DrawerNavExp = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
    )
}

export default DrawerNavExp

const styles = StyleSheet.create({})