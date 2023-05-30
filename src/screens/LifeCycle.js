import { Text, StyleSheet, View, Alert, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

class NameComponent extends Component {
    render() {
        return (<Text>My name is {this.props.name} and i am {this.props.age} years old.</Text>)
    }
}


export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Shruti", age: 19 }

    }
    componentDidMount() {
        Alert.alert("Component Did Mount")
    }
    componentDidUpdate() {
        Alert.alert("Component did update")
    }
    componentWillUnmount() {
        Alert.alert("Component will unmount")
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Text style={{fontSize:RFValue(24)}}>LifeCycle Example</Text>
                <NameComponent name="Shruti" age="19" />
                <NameComponent name="Shruti" age="19" />
                <TouchableOpacity onPress={() => { this.setState({ name: "abc" }) }}><Text>Click me</Text></TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({})