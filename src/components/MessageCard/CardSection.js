import React from 'react';
import { Text, View } from 'react-native';

const style = {
  flex: 1,
  flexDirection: 'row',
  padding: 5
}

export default ({children}) => {
  return (
    <View style={style}>
      {children}
    </View>
  );
}