import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Platform, Image } from "react-native";

export default function Header({ title, onPressRightButton }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      {onPressRightButton && (
        <TouchableOpacity onPress={onPressRightButton}>
          <Image style={styles.icon}  source={require("../assets/plus.png")} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    height: Platform.OS === "ios" ? 80 : 70,
  },
  icon: {
    width: 25,
    height: 25,
    marginTop: 28,
    marginRight: 15,
  },
  header: {
    marginTop: 25,
    paddingTop: Platform.OS === "ios" ? 25 : 0,
    paddingHorizontal: 15,
    color: "black",
    fontSize: 30,
  },
});
