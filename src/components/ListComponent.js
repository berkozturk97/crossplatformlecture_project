import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { ListItem, Avatar } from 'react-native-elements'

export default function ListComponent({ title, description }) {
  return (
    <View>
      <ListItem containerStyle={{ backgroundColor: 'black' }} >
        <Avatar />
        <ListItem.Content >
          <ListItem.Title style={{color:'white'}}>{title}</ListItem.Title>
          <ListItem.Subtitle style={{color:'grey'}}>{description}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
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
