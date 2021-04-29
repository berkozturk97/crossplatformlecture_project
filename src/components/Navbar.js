import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";

import { Link } from "react-router-native";

export default function Navbar() {

  const [activeTab, setActiveTab] = useState(0);

  const changeTabImage = (tab) => {
    setActiveTab(tab);
  }

  return (
    <View style={styles.nav}>
      <Link to="/" onPress={() => changeTabImage(0)} underlayColor="tranparent" style={styles.navItem}>
        <View style={styles.imgContainer}>
          <Image
            source={activeTab === 0 ? require('../assets/nav-icons/covers.png') : require('../assets/nav-icons/covers1.png')}
            style={styles.imgStyle}
          />
          <Text style={styles.navText}>Products</Text>
        </View>
      </Link>
      <Link
        to="/categories"
        underlayColor="tranparent"
        style={styles.navItem}
        onPress={() => changeTabImage(1)}
      >
        <View style={styles.imgContainer}>
          <Image
            source={activeTab === 1 ? require('../assets/nav-icons/heart.png') : require('../assets/nav-icons/heart1.png')}
            style={styles.imgStyle}
          />
          <Text style={styles.navText}>Categories</Text>
        </View>
      </Link>
      <Link
        to="/topics"
        underlayColor="tranparent"
        style={styles.navItem}
        onPress={() => changeTabImage(2)}
      >
        <View style={styles.imgContainer}>
          <Image
            source={activeTab === 2 ? require('../assets/nav-icons/layers.png') : require('../assets/nav-icons/layers1.png')}
            style={styles.imgStyle}
          />
          <Text style={styles.navText}>Orders</Text>
        </View>
      </Link>
    </View>
  );

}

const styles = StyleSheet.create({
  nav: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'black',
    flex: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: "row",
  },
  navItem: {
    flex: 2,
    alignItems: "center",
    padding: 15,
  },
  navText: {
    color: 'white',
    fontSize: 12
  },
  imgStyle: {
    width: 25,
    height: 25
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
