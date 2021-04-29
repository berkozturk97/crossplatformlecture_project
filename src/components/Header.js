import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

export default function Header() {

  return (
      <View style={styles.container}>
     
      </View>
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
  nav: {
    flex: 1,
    flexDirection: "row",
    bottom: 0,
    position: 'absolute'
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
