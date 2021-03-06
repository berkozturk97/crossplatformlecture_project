import React, { useContext, useState } from "react";
import { updateCategory } from "../api/api";
import { View, StyleSheet,TouchableOpacity,Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { CategoryContext } from "../context/CategoryContext";

function CategoryUpdate({ navigation, ...params }) {
  const [categories, setCategories] = useContext(CategoryContext);
  const [categoryItem, setCategoryItem] = useState(
    params.route.params.category
  );

  const handleItemName = (e) => {
    setCategoryItem({ ...categoryItem, name: e.target.value });
  };

  const handleItemDescription = (e) => {
    setCategoryItem({ ...categoryItem, description: e.target.value });
  };

  const updateCategoryItem = async () => {
    let response = await updateCategory({
      body: categoryItem,
      id: categoryItem.id,
    });
    let updatedCategories = categories.filter(
      (item) => item.id !== response.id
    );
    updatedCategories.push(response);
    updatedCategories.sort((a,b) => a.id - b.id);
    setCategories(updatedCategories);
    navigation.navigate('Categories')
  };

  return (

    <View style={styles.container}>
      <Image style={styles.icon2} source={require("../assets/category-icons/UpdateIcon.png")} />
      <Input
        value={categoryItem.name}
        onChange={handleItemName}
        style={styles.input}
        placeholder="Name"
      />
      <Input
        value={categoryItem.description}
        onChange={handleItemDescription}
        style={styles.input}
        placeholder="Description"
      />
      
  
      <TouchableOpacity onPress={() => updateCategoryItem()} style={styles.container}>
        <Image style={styles.icon} source={require("../assets/category-icons/Update.png")} />
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

export default CategoryUpdate;
