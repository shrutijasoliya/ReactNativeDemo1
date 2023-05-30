import {
  Text,
  View,
  PreviewLayout,
  StyleSheet,
  ActivityIndicator,
  Button,
  Alert,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  FlatList,
  Pressable,
  Switch,
  TextInput,
  VirtualizedList,
} from 'react-native';
import React, { useState } from 'react';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const DATA = [
  {
    fName: 'Shruti',
    lName: 'Jasoliya',
    color: 'pink',
    age: 20,
    weight: 25,
    description: 'hello shruti',
  },
  {
    fName: 'Sakshi',
    lName: 'Mavani',
    color: 'pink',
    age: 20,
    weight: 25,
    description: 'hello shruti',
  },
];
const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [show, setshow] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const changeToggle = () => {
    setIsEnabled(!isEnabled);
  };
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 1000);
            }}></RefreshControl>
        }>
        <Text>HomeScreen</Text>
        <ActivityIndicator style={styles.box} size="small" />
        <Button
          onPress={() => {
            console.log('Heyy !!');
            Alert.alert('Heyy!!');
          }}
          title="Click"></Button>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            Alert.alert('You Cliked me..!');
          }}>
          <Text style={styles.txtButton}>Click</Text>
        </TouchableOpacity>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Pressable
              style={{ backgroundColor: item.color }}
              onPress={() => {
                setshow(!show);
              }}>
              <Text>
                {item.fName} {item.lName}
              </Text>
              <Text>{item.age}</Text>
              <Text>{item.weight}</Text>
              {show && <Text>{item.description}</Text>}
            </Pressable>
          )}></FlatList>

        <Switch
          thumbColor={{ false: 'pink', true: 'blue' }}
          trackColor={isEnabled ? 'red' : 'aqua'}
          onValueChange={changeToggle}
          value={isEnabled}></Switch>

        <TextInput
          style={styles.TextInput}
          value={text}
          onChangeText={val => {
            Alert.alert(val);
          }}
          placeholder="Enter your name"></TextInput>
      </ScrollView>
      <VirtualizedList
        data={DATA}
        getItem={(item, index) => {
          console.log(item, index);
          return item[index];
        }}
        getItemCount={data => 1}
        renderItem={({ item }) => {
          console.log('iiiii', item);
          return (
            <Pressable
              style={{ backgroundColor: item.color }}
              onPress={() => {
                setshow(!show);
              }}>
              <Text>
                {item.fName} {item.lName}
              </Text>
              <Text>{item.age}</Text>
              <Text>{item.weight}</Text>
              {show && <Text>{item.description}</Text>}
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
  },
  txtButton: {
    padding: 10,
    color: 'white',
    width: '80%',
    textAlign: 'center',
  },
  touch: {
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  TextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
});
