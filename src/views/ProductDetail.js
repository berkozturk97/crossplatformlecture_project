import { HeaderTitle } from "@react-navigation/stack";
import color from "color";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
          <View style={styles.info}>
            <Image style={styles.icon}  source={require("../assets/product-icons/ProductName.png")} />
            <Text style={{color:"#800080", fontSize:17, fontWeight:"400"}} >Product name: </Text>
            <Text style={styles.mainTitle}>{product && product.name} </Text> 
          </View>
          <View style={styles.info}>
             <Image style={styles.icon}  source={require("../assets/product-icons/Quantity.png")} />
              <Text style={{color:"#800080", fontSize:17, fontWeight:"400"}}>Quantity per unit: </Text>
              <Text style={styles.mainTitle}>{product && product.quantityPerUnit} </Text>
          </View>
          <View style={styles.info}>
            <Image style={styles.icon}  source={require("../assets/product-icons/Price.png")} />
            <Text style={{color:"#800080", fontSize:17, fontWeight:"400"}}>Price: </Text>
            <Text style={styles.mainTitle}>${product && product.unitPrice} </Text>
          </View>
          <View style={styles.info}>
              <Image style={styles.icon}  source={require("../assets/product-icons/Discount.png")} />
              <Text style={{color:"#800080", fontSize:17, fontWeight:"400"}}>Discount: </Text>
              <Text style={styles.mainTitle}>{product && product.discontinued === true ? "Yes" : "No"}</Text>
          </View>
          <View style={styles.info}>
              <Image style={styles.icon}  source={require("../assets/product-icons/Stock.png")} />
              <Text style={{color:"#800080", fontSize:17, fontWeight:"400"}}>Stock: </Text>
              <Text style={styles.mainTitle}>{product && product.unitsInStock > 0 ? product.unitsInStock : "Out of stock" }</Text>
          </View>
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
    margin: 20,
    marginTop: 30
  },
  mainTitle: {
    color: "black",
    fontSize: 17,
    flex: 1,
    flexWrap: 'wrap'
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  info:{
    flexDirection:"row",
    alignItems:"flex-start",
    marginBottom:20

  }
});

export default ProductDetail;
