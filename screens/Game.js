import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import commonStyles from '../styles/styles';
import GameCard from '../components/Game/GameCard';
import WinningCard from '../components/Game/WinningCard';
import WrongGuessCard from '../components/Game/WrongGuessCard';
import GameOverCard from '../components/Game/GameOverCard';

export default function Game({ restartHandler }) {
    const [target, setTarget] = useState(0);
    const [attempt, setAttempt] = useState(4);
    const [timer, setTimer] = useState(60);
    const [hintCount, setHintCount] = useState(1);
    const [losingMsg, setLosingMsg] = useState('');
    const [winningMsg, setWinningMsg] = useState('');
    const [currentCard, setCurrentCard] = useState('game');

    // --------handle system setting--------
    useEffect(() => {
        const randomNumber = generateRandomNumber();
        setTarget(randomNumber);
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer === 0 && currentCard != 'winning' && currentCard != 'gameOver') {
            setLosingMsg("You are out of time");
            setCurrentCard('gameOver');
        }
    }, [timer]);

    const generateRandomNumber = () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log('The target number is', randomNumber);
        return randomNumber;
    }

    const resetSystemSettings = () => {
        setHintCount(1);
        setLosingMsg('');
        setAttempt(4);
        setTimer(60);
    };

    // --------handle callback value from GameCard--------
    const handleHint = (hintCount) => {
        setHintCount(hintCount);
    };

    const handleGuess = (guess) => {
        console.log('User guessed', guess);
        if (guess === target) {
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

    // --------handle callback value from WrongGuessCard--------  
    const handleTryAgain = (tryAgain) => {
        if (tryAgain) {
            if (attempt === 0) {
                setCurrentCard('gameOver');
                resetSystemSettings();
                setLosingMsg("You are out of attempts");
            } else {
                setCurrentCard('game');
            }
        }
    };

    const handleEndGame = (EndAgain) => {
        if (EndAgain) {
            setCurrentCard('gameOver');
        }
    };

    // --------handle callback value from WinningCard-------- 
    const handleNewGame = () => {
        setCurrentCard('game');
        resetSystemSettings();
        const randomNumber = generateRandomNumber();
        setTarget(randomNumber);
    };

    // --------invoke restartHandler, pass back to App.js-------- 
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
                    hintCount={hintCount}
                    hintCountHandler={handleHint}
                    attempt={attempt}
                    timer={timer}
                    guessHandler={handleGuess}
                />
            );
        }
        if (currentCard === 'wrongGuess') {
            return (
                <WrongGuessCard
                    tryAgainHandler={handleTryAgain}
                    endGameHandler={handleEndGame}
                />
            );
        }
        if (currentCard === 'winning') {
            return (
                <WinningCard
                    winningMsg={winningMsg}
                    target={target}
                    newGameHandler={handleNewGame}
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