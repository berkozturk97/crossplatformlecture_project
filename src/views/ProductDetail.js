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
        <View style={styles.textContainer}>
          <Text style={styles.mainTitle}>Product name: {product && product.name} </Text>
          <Text style={styles.mainTitle}>Quantity per unit: {product && product.quantityPerUnit} </Text>
          <Text style={styles.mainTitle}>Price: ${product && product.unitPrice} </Text>
          <Text style={styles.mainTitle}>Discount: {product && product.discontinued === true ? "Yes" : "No"}</Text>
          <Text style={styles.mainTitle}>Stock: {product && product.unitsInStock > 0 ? product.unitsInStock : "Out of stock" }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textContainer: {
    margin: 20
  },
  mainTitle: {
    color: "black",
    fontSize: 20,
  },
});

export default ProductDetail;
