import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Header from '../components/Header';

function Orders() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 25,
      flex: 1,
    },
    header: {
      marginTop: 10,
      paddingHorizontal: 15,
      color: "white",
      fontSize: 30,
    },
  });
  

export default Orders;