import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { ListItem } from 'react-native-elements'
import { DeleteIcon } from "./DeleteIcon";
import { EditIcon } from "./EditIcon";
import { NumberImage } from "./NumberImage";

export default function ListComponent({ title, onPressDelete, onPressEdit, description, id, fontSizeIcon = 20, date = null, edit = null }) {
  return (
    <View>
      <ListItem containerStyle={{ backgroundColor: 'black' }} >
        <NumberImage fontSizeIcon={fontSizeIcon} number={id} />
        <ListItem.Content >
          <ListItem.Title style={{ color: 'white' }}>{title}</ListItem.Title>
          <ListItem.Subtitle style={{ color: 'grey' }}>{description}</ListItem.Subtitle>
        </ListItem.Content>
        {date ?
          <Text style={{ color: 'grey' }}>{date}</Text> :
          <DeleteIcon onPress={onPressDelete} />
        }
        {edit && <EditIcon onPress={onPressEdit} />}
      </ListItem>
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
