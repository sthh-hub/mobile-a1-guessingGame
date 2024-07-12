import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/Header';
import Start from './screens/Start';
// import Game from './screens/Game';
// import Confirm from './screens/Confirm';

export default function App() {

  return (
    <LinearGradient
    colors={['#FFD8C1', '#FFB6A1', '#FF7E79']}
    style={styles.container}
  >
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Header></Header>
      </View>
      <View style={styles.contentContainer}>
      <Start></Start>
      </View>
      <View style={styles.bottomContainer}>
      </View>
      <StatusBar style="auto" />
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gradient',
  },
  topContainer: {
    flex: 1,
    paddingTop: '20%',
    marginTop: '10%',
    paddingBottom: 30,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
});
