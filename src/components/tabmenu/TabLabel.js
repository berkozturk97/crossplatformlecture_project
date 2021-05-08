import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, Platform} from 'react-native';

export const TabLabel = ({title = '', ...props}) => {
  const [focused, setFocused] = useState(props.focused);

  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  return (
    <Text
      style={[
        styles.text,
        focused ? {color: 'white'} : {color: "grey"},
      ]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 10,
  },
});
