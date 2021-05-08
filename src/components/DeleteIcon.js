import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Image, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
export const DeleteIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../assets/bin.png')} style={styles.container} />
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 25,
  },
});
