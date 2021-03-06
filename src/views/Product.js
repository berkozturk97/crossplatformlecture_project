import React, { useState, useEffect, useContext } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import ListComponent from "../components/ListComponent";
import { Loading } from "../components/Loading";
import { deleteProductById, getProducts } from "../api/api";
import { ProductContext } from "../context/ProductContext";
import { useHistory } from "react-router";

function Product({ navigation, ...props }) {
  const [isVisible, setIsVisible] = useState(true);
  const [products, setProducts] = useContext(ProductContext);
  const history = useHistory();
  useEffect(() => {
    getAllProducts();
    setIsVisible(false);
  }, []);


  const deleteProduct = async (id) => {
    await deleteProductById({ id })
    const updatedProduct = products.filter((item) => item.id !== id)
    setProducts(updatedProduct);
  }

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
              onPressDelete={() => deleteProduct(item.id)}
              description={item.quantityPerUnit}
              id={item.id}
              onPress={() => {
                navigation.navigate({
                  name: 'ProductsDetail',
                  params: {
                    id: item.id,
                  },
                });
              }}
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
    backgroundColor: "white",
  },
});

export default Product;
