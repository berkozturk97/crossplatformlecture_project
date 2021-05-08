import React, { useState, useEffect, useContext } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import ListComponent from "../components/ListComponent";
import { Loading } from "../components/Loading";
import { deleteCategoryById, getCategories } from "../api/api";
import { CategoryContext } from "../context/CategoryContext";

function Categories({ navigation }) {
  const [isVisible, setIsVisible] = useState(true);
  const [categories, setCategories] = useContext(CategoryContext);

  useEffect(() => {
    getAllCategories();
    setIsVisible(false);
  }, []);

  const deleteCategory = async (id) => {
    await deleteCategoryById({ id });
    const updatedCategories = categories.filter((item) => item.id !== id);
    setCategories(updatedCategories);
  };

  const getAllCategories = async () => {
    let list = await getCategories();
    const sortedList = list.sort((a, b) => a.id - b.id);
    setCategories(sortedList);
    console.log(list[0]);
  };

  if (isVisible) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Header title={"Categories"} />

        <FlatList
          keyExtractor={(item) => item.id}
          data={categories}
          renderItem={({ item }) => (
            <ListComponent
              title={item.name}
              onPressDelete={() => deleteCategory(item.id)}
              description={item.description}
              id={item.id}
              onPressEdit={() => {
                navigation.navigate({
                  name: "CategoryUpdate",
                  params: {
                    category: item,
                  },
                });
              }}
              edit={true}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default Categories;
