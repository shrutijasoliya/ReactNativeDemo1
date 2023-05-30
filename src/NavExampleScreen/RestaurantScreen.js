import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const RestaurantScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RestaurantScreen</Text>
    </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: RFValue(18), color: 'black'
  }
})