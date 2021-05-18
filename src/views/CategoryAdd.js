import React, { useContext, useState } from "react";
import { addCategory } from "../api/api";
import { View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { CategoryContext } from "../context/CategoryContext";

function CategoryAdd({ navigation, ...params }) {
  const [categories, setCategories] = useContext(CategoryContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleItemName = (e) => {
    setName(e.target.value);
  };

  const handleItemDescription = (e) => {
    setDescription(e.target.value);
  };

  const addCategoryItem = async () => {
    const body = {
      description,
      name
    }
    let response = await addCategory({ body });
    let updatedCategory = categories;
    updatedCategory.push(response);
    updatedCategory.sort((a, b) => a.id - b.id);
    setCategories(updatedCategory);
    navigation.navigate('Categories')
  };

  return (
    <View style={styles.container}>
      <Input
        value={name}
        onChange={handleItemName}
        style={styles.input}
        placeholder="Name"
      />
      <Input
        value={description}
        onChange={handleItemDescription}
        style={styles.input}
        placeholder="Description"
      />
      <Button title="Add Category" onPress={() => addCategoryItem()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "white",
  },
  input: {
    color: "black",
  },
  mainTitle: {
    color: "black",
    fontSize: 20,
  },
});

export default CategoryAdd;
