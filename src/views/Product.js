import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import ListComponent from "../components/ListComponent";
import { Loading } from "../components/Loading";
import { getProducts } from "../api/api";

function Product() {
  const [isVisible, setIsVisible] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
    setIsVisible(false);
  }, []);

  const getAllProducts = async () => {
    let list = await getProducts();
    const sortedList = list.sort((a, b) => a.id - b.id);
    setProducts(sortedList);
    console.log(list[0]);
  };

  if (isVisible) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Header title={"Product"} />

        <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={({ item }) => (
            <ListComponent
              title={item.name}
              description={item.quantityPerUnit}
              id={item.id}
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

export default Product;
