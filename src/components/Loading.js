import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
export const Loading = ({ size = 60 }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
