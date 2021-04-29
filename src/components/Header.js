import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: Platform.OS === 'ios' ? 80 : 50,
  },
  header: {
    marginTop: 10,
    paddingTop: Platform.OS === 'ios' ? 25 : 0,
    paddingHorizontal: 15,
    color: "white",
    fontSize: 30,
  },
});
