import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
export const NumberImage = ({ number = 0, fontSizeIcon = 20 }) => {
  return (
    <ImageBackground source={require('../assets/dot.png')} style={styles.container}>
      <Text style={[styles.number, { fontSize: fontSizeIcon }]}>{number}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: 'white'
  }
});
