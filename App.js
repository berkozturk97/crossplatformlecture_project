import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import Navbar from "./src/components/Navbar";

const Products = () => <Text style={styles.header}>Home</Text>;

const Categories = () => <Text style={styles.header}>About</Text>;

const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

const Orders = ({ match }) => (
  <View>
    <Text style={styles.header}>Orders</Text>
    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => (
        <Text style={styles.topic}>Please select a topic.</Text>
      )}
    />
  </View>
);

export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Navbar />
        <Route exact path="/" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/orders" component={Orders} />
      </View>
    </NativeRouter>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1
  },
  header: {
    fontSize: 20,
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  },
});
