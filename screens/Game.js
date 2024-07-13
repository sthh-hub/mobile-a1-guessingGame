import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import commonStyles from '../styles/styles';
import GameCard from '../components/Game/GameCard';
import WinningCard from '../components/Game/WinningCard';
import WrongGuessCard from '../components/Game/WrongGuessCard';
import GameOverCard from '../components/Game/GameOverCard';

export default function Game({ restartHandler }) {
    const [target, setTarget] = useState(0);
    const [guess, setGuess] = useState('');
    const [attempt, setAttempt] = useState(4);
    const [timer, setTimer] = useState(60);
    const [hintMsg, setHintMsg] = useState('');
    const [losingMsg, setLosingMsg] = useState('');
    const [winningMsg, setWinningMsg] = useState('');
    const [currentCard, setCurrentCard] = useState('game');

    useEffect(() => {
        const randomNumber = generateRandomNumber();
        setTarget(randomNumber);
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer === 0 && currentCard != 'winning') {
            setLosingMsg("You are out of time");
            setCurrentCard('gameOver');
        }
    }, [timer]);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
    }

    const resetSystemSettings = () => {
        setGuess('');
        setHintMsg('');
        setLosingMsg('');
        setAttempt(4);
        setTimer(60);
    };

    const handleHint = (hintMsg) => {
        setHintMsg(hintMsg);
    };

    const handleGuess = (guess) => {
        const guessNumber = parseInt(guess, 10);
        if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
            Alert.alert('Invalid Input', 'Please enter a number between 1 and 100.');
            return;
        }
        if (guessNumber === target) {
            // if the guess is correct
            setWinningMsg(`Attempts used: ${4 - attempt + 1}`);
            setCurrentCard('winning');
            resetSystemSettings();
        } else {
            // if the guess is wrong
            setAttempt(attempt - 1);
            setCurrentCard('wrongGuess');
        }
    };

    const handleTryAgain = () => {
        if (attempt === 0) {
            setCurrentCard('gameOver');
            resetSystemSettings();
            setLosingMsg("You are out of attempts");
        } else {
            setCurrentCard('game');
        }
    };

    const handleEndGame = () => {
        setCurrentCard('gameOver');
    };

    const handleNewGame = () => {
        setCurrentCard('game');
        resetSystemSettings();
        const randomNumber = generateRandomNumber();
        setTarget(randomNumber);
    };

    const handleResetGame = () => {
        restartHandler('Start');
        resetSystemSettings();
        const randomNumber = generateRandomNumber();
        setTarget(randomNumber);
    };

    const renderCard = (currentCard) => {
        if (currentCard === 'game') {
            return (
                <GameCard
                    target={target}
                    guess={guess}
                    setGuess={setGuess}
                    hintMsg={hintMsg}
                    attempt={attempt}
                    timer={timer}
                    hintHandler={handleHint}
                    handleGuess={handleGuess}
                />
            );
        }
        if (currentCard === 'wrongGuess') {
            return (
                <WrongGuessCard
                    handleTryAgain={handleTryAgain}
                    handleEndGame={handleEndGame}
                />
            );
        }
        if (currentCard === 'winning') {
            return (
                <WinningCard
                    winningMsg={winningMsg}
                    target={target}
                    handleNewGame={handleNewGame}
                />
            );
        }
        if (currentCard === 'gameOver') {
            return (
                <GameOverCard
                    losingMsg={losingMsg}
                />
            );
        }
    };

    return (
        <View style={styles.gameContainer}>
            <View style={styles.restartButtonStyle}>
                <Button title="Restart" onPress={handleResetGame} />
            </View>
            <View style={styles.gamePanelContainer}>
                {renderCard(currentCard)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gameContainer: {
        ...commonStyles.container,
    },
    restartButtonStyle: {
        alignSelf: 'flex-end',
        marginTop: '30%',
        marginRight: 25,
    },
});