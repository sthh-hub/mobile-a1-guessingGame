import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/Header';
import Start from './screens/Start';
import Confirm from './screens/Confirm';
import Game from './screens/Game';
import commonStyles from './styles/styles';

export default function App() {
  const [receivedName, setReceivedName] = useState('');
  const [receivedEmail, setReceivedEmail] = useState('');
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('Start');

  // --------handle callback from Start page--------
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

  // --------handle callback from Confirm page--------
  function hanldeGoBack() {
    setConfirmModalVisible(false);
  }

  function handleContinue(gamePage) {
    setCurrentPage(gamePage);
    setConfirmModalVisible(false);
  }

  // --------handle callback from Game page--------
  function handleRestart() {
    setCurrentPage('Start');
  }


  function renderPage(currentPage) {
    if (currentPage === 'Start') {
      return (
        <View>
          <Start
            nameHandler={handleNameInput}
            emailHandler={handleEmailInput}
            startHandler={handleStart} />
          <Confirm
            isModalVisible={confirmModalVisible}
            name={receivedName}
            email={receivedEmail}
            goBackHandler={hanldeGoBack}
            continueHandler={handleContinue} />
        </View>
      );
    }
    if (currentPage === 'Game') {
      return (
        <View>
          <Game restartHandler={handleRestart} />
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
    ...commonStyles.container,
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
