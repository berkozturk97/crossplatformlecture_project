import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet } from 'react-native';

export const EditIcon = ({ onPress }) => {
  return (
    <TouchableOpacity stlye={styles.container} onPress={onPress}>
      <Image source={require('../assets/edit.png')} style={styles.container} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 25,
  },
});
