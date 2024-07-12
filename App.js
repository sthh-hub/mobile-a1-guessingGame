import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/Header';
import Start from './screens/Start';
import Confirm from './screens/Confirm';
// import Game from './screens/Game';

export default function App() {
  const [receivedName, setReceivedName] = useState('');
  const [receivedEmail, setReceivedEmail] = useState('');
  const [confirmModalVisible, setConfirmModalVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState('Start');

  // Callback from Start page
  function handleNameInput(name) {
    setReceivedName(name);
  }

  function handleEmailInput(email) {
    setReceivedEmail(email);
  }

  function handleStart() {
    // Show Confirm modal
    setConfirmModalVisible(true);
  }

  // Callback from Confirm page
  function hanldeGoBack() {
    setConfirmModalVisible(false);
  }

  function renderPage(currentPage) {
    if (currentPage === 'Start') {
      return (
        <View>
          <Start nameHandler={handleNameInput} emailHandler={handleEmailInput} startHandler={handleStart} />
          <Confirm isModalVisible={confirmModalVisible} name={receivedName} email={receivedEmail} goBackHandler={hanldeGoBack} />
        </View>
      );
    }
    if (currentPage === 'Game') {
      return (
        <View>
          <Game />
        </View>
      );
    }
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
          {renderPage(currentPage)}
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
