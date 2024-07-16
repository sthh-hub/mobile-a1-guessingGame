import React from 'react';
import { View, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <View
    style={{ flex: 1 }}
    onStartShouldSetResponder={() => {
      Keyboard.dismiss();
      return false;
    }}
  >
    {children}
  </View>
);

export default DismissKeyboard;