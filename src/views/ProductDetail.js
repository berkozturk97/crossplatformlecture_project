import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getProductById } from "../api/api";
import Header from "../components/Header";
import { Loading } from "../components/Loading";

function ProductDetail({ navigation, ...params }) {
  const [product, setProduct] = useState();
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    getSelectedProduct(params.route.params.id);
    setIsVisible(false);
  }, []);

  const getSelectedProduct = async (id) => {
    const selectedProduct = await getProductById({ id });
    console.log(selectedProduct);
    setProduct(selectedProduct);
  };

  if (isVisible) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Header title={product && product.name} />
        <Text>Product name: </Text>
        <Text>Quantity per unit: </Text>
        <Text>Price: </Text>
        <Text>Discount: </Text>
        <Text>Stock: </Text>
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

export default ProductDetail;
