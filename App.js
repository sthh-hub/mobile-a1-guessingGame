import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/Header';
import Start from './screens/Start';
// import Game from './screens/Game';
// import Confirm from './screens/Confirm';

export default function App() {
  const [receivedName, setReceivedName] = useState('');
  // const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  

  function handleNameInput(name) {
    setReceivedName(name);
    // setConfirmModalVisible(true);
  }

  return (
    <LinearGradient
    colors={['#FFD8C1', '#FFB6A1', '#FF7E79']}
    style={styles.container}
  >
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Header />
      </View>
      <View style={styles.contentContainer}>
      <Start nameHandler={handleNameInput} />
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
    paddingBottom: '15%',
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
});
