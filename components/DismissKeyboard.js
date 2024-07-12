import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;