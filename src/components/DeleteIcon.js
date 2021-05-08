import React from 'react';
import { Image, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
export const DeleteIcon = ({ onPress }) => {
  return (
    <Image onPress={onPress} source={require('../assets/bin.png')} style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 25,
  },
});
