import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Deneme</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 80,
  },
  header: {
    textAlign: "center",
    marginTop: 10,
    paddingTop: 25,
    paddingHorizontal: 15,
    color: "white",
    fontSize: 30,
  },
});
