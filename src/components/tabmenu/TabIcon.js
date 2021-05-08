/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';

export const TabIcon = ({iconName = 'covers', ...props}) => {
  const [size, setSize] = useState(props.size);
  const [icon, setIcon] = useState(iconName);
  const [focused, setFocused] = useState(props.focused);

  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  let images = {
    products: {
      focused: require('../../assets/nav-icons/Products.png'),
      unfocused: require('../../assets/nav-icons/ProductsOff.png'),
    },
    categories: {
      focused: require('../../assets/nav-icons/Categories.png'),
      unfocused: require('../../assets/nav-icons/CategoriesOff.png'),
    },
    orders: {
      focused: require('../../assets/nav-icons/Orders.png'),
      unfocused: require('../../assets/nav-icons/OrdersOff.png'),
    },
  };

  const deneme = () => {
    if (focused) {
      return (
        <Image style={{height: 25, width: 25}} source={images[icon].focused} />
      );
    } else {
      return (
        <Image
          style={{height: 25, width: 25}}
          source={images[icon].unfocused}
        />
      );
    }
  };

  return deneme();
};


