import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import Navbar from "./src/components/Navbar";
import Categories from "./src/views/Categories";
import Products from "./src/views/Product";
import Orders from "./src/views/Orders";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NativeRouter>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.container}>
        <Route exact path="/" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/orders" component={Orders} />
        <Navbar />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});
