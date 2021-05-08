import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Header from '../components/Header';

function Orders() {

  return (
    <View style={styles.container}>
      <Header title={"Orders"} />
      <Text>Orders</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

export default Orders;