import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Header from '../components/Header';

function Categories() {
  return (
    <View style={styles.container}>
      <Header title={"Categories"} />
      <Text >Categories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

export default Categories;