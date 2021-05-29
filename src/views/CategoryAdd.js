import React, { useContext, useState } from "react";
import { addCategory } from "../api/api";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
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
      <Image style={styles.icon2} source={require("../assets/category-icons/AddIcon.png")} />

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
      
      <TouchableOpacity onPress={() => addCategoryItem()} style={styles.container}>
        <Image style={styles.icon} source={require("../assets/category-icons/AddCategory.png")} />
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "white",
    alignItems:"center",
    justifyContent:"space-between"
  },
  input: {
    color: "black",
  },
  mainTitle: {
    color: "black",
    fontSize: 20,
  },
  icon: {
    width: 200,
    height:48 
  },
  icon2: {
    width: 120,
    height:120,
  },
});

export default CategoryAdd;
