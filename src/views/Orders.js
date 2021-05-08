import React, { useEffect, useState } from 'react';
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { Loading } from "../components/Loading";
import { getOrders } from "../api/api";
import ListComponent from "../components/ListComponent";

function Orders() {

  const [isVisible, setIsVisible] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders();
    setIsVisible(false);
  }, []);

  const getAllOrders = async () => {
    let list = await getOrders();
    const sortedList = list.sort((a, b) => new Date(b.orderDate.split(' ')[0]) - new Date(a.orderDate.split(' ')[0]));
    setOrders(sortedList);
  };

  if (isVisible) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Header title={"Orders"} />

        <FlatList
          keyExtractor={(item) => item.id}
          data={orders}
          renderItem={({ item }) => (
            <ListComponent
              title={item.shipName}
              description={item.shipAddress.city + ", " + item.shipAddress.country}
              id={item.customerId}
              fontSizeIcon={10}
              date={item.orderDate.split(' ')[0]}
            />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

export default Orders;