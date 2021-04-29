import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
export const Loading = ({ size = 60 }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
