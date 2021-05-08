import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Platform } from "react-native";
import { ListItem } from "react-native-elements";
import { Link } from "react-router-native";
import { DeleteIcon } from "./DeleteIcon";
import { NumberImage } from "./NumberImage";

export default function ListComponent({
  title,
  onPress,
  description,
  id,
  fontSizeIcon = 20,
  date = null,
}) {
  return (
    <Link
      to={{
        pathname: `/productDetail/:${id}`,
        search: "?id",
        hash: "#id",
        state: id,
      }}
    >
      <View>
        <ListItem containerStyle={{ backgroundColor: "black" }}>
          <NumberImage fontSizeIcon={fontSizeIcon} number={id} />
          <ListItem.Content>
            <ListItem.Title style={{ color: "white" }}>{title}</ListItem.Title>
            <ListItem.Subtitle style={{ color: "grey" }}>
              {description}
            </ListItem.Subtitle>
          </ListItem.Content>
          {date ? (
            <Text style={{ color: "grey" }}>{date}</Text>
          ) : (
            <DeleteIcon onPress={onPress} />
          )}
        </ListItem>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: Platform.OS === "ios" ? 80 : 50,
  },
  header: {
    marginTop: 10,
    paddingTop: Platform.OS === "ios" ? 25 : 0,
    paddingHorizontal: 15,
    color: "white",
    fontSize: 30,
  },
});
