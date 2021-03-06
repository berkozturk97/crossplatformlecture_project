import React from "react";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import { ListItem } from "react-native-elements";
import { Link } from "react-router-native";
import { DeleteIcon } from "./DeleteIcon";
import { EditIcon } from "./EditIcon";
import { NumberImage } from "./NumberImage";

export default function ListComponent({ onPress, title, onPressDelete, onPressEdit, description, id, fontSizeIcon = 20, date = null, edit = null }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItem containerStyle={{ backgroundColor: "white" }}>
        <NumberImage fontSizeIcon={fontSizeIcon} number={id} />
        <ListItem.Content>
          <ListItem.Title style={{ color: "black" }}>{title}</ListItem.Title>
          <ListItem.Subtitle style={{ color: "grey" }}>
            {description}
          </ListItem.Subtitle>
        </ListItem.Content>
        {date ?
          <Text style={{ color: 'grey' }}>{date}</Text> :
          <DeleteIcon onPress={onPressDelete} />
        }
        {edit && <EditIcon onPress={onPressEdit} />}
      </ListItem>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: Platform.OS === "ios" ? 80 : 50,
  },
  header: {
    marginTop: 10,
    paddingTop: Platform.OS === "ios" ? 25 : 0,
    paddingHorizontal: 15,
    color: "black",
    fontSize: 30,
  },
});
