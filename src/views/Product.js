import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Header from '../components/Header';
import {Loading} from '../components/Loading';

function Product() {

  const [isVisible, setIsVisible] = useState(true);

  if (isVisible) {
    return <Loading />
  } else {
    return (
      <View style={styles.container}>
        <Header title={"Product"} />
        <Text>Product</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

export default Product;