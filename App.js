import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import Start from './screens/Start';
import Game from './screens/Game';
import Confirm from './screens/Confirm';
import Header from "./components/Header";
import Input from "./components/Input";
import GoalItem from "./Components/GoalItem";

export default function App() {

  return (
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#ffff00',
    padding: 5,
    borderRadius: 5,
  },
  textSytle: {
    fontSize: 25,
    margin: 10,
  },
  buttonStyle: {
    width: '30%',
    fontSize: 12,
    backgroundColor: 'lightblue',
    color: 'white',
    borderRadius: 5,
    margin: 5,
  },
  topContainer: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 5,
    backgroundColor: 'lightyellow',
    width: '100%',
    alignItems: 'center'
  }
});
