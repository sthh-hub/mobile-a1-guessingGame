import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

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
        if (timer === 0) {
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

    const handleHint = () => {
        const evenOrOdd = target % 2 === 0 ? 'Even' : 'Odd';
        if (target > 50) {
            setHintMsg(`${evenOrOdd} number & from 51 to 100`);
        } else {
            setHintMsg(`${evenOrOdd} number & from 1 to 50`);
        }
    };

    const handleGuess = (guess) => {
        guessNumber = parseInt(guess, 10);
        if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
            Alert.alert('Invalid Input', 'Please enter a number between 1 and 100.');
            setGuess('');
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
        randomNumber = generateRandomNumber();
        setTarget(randomNumber);
    };

    const handleResetGame = () => {
        restartHandler('Start');
        resetSystemSettings();
        randomNumber = generateRandomNumber();
        setTarget(randomNumber);
    };

    const gameCard = () => {
        return (
            <View>
                <View style={styles.topContainer}>
                    <Text style={styles.topMsgTextStyle}>Guess a Number{"\n"}from 1 to 100</Text>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputStyle}
                            value={guess}
                            onChangeText={setGuess}
                            placeholder="?"
                            autoCapitalize={false}
                            autoFocus={true}
                        >
                        </ TextInput>
                    </View>
                    <Text style={styles.hintTextStyle}>{hintMsg}</Text>
                    <View style={styles.systemMsgContainer}>
                        <Text style={styles.systemMsgTextStyle}>Attempts left: {attempt}</Text>
                        <Text style={styles.systemMsgTextStyle}>Timer: {timer}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.buttonStyle}><Button title="Use a Hint" onPress={handleHint} color="#ff7f50" /></View>
                    <View style={styles.buttonStyle}><Button title="Submit Guess" onPress={() => { handleGuess(guess); }} /></View>
                </View>
            </View>
        );
    };

    const wrongGuessCard = () => {
        return (
            <View>
                <View style={styles.topContainer}>
                    <Text>You did not guess correct!</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.buttonStyle}><Button title="Try Again" onPress={handleTryAgain} /></View>
                    <View style={styles.buttonStyle}><Button title="End The Game" onPress={handleEndGame} /></View>
                </View>
            </View>
        );
    };

    const winningCard = () => {
        return (
            <View>
                <View style={styles.topContainer}>
                    <Text>You guessed correct!</Text>
                    <Text>{winningMsg}</Text>
                    <Image source={{ uri: `https://picsum.photos/id/${guess}/100/100` }} style={styles.resultImage} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.buttonStyle}><Button title="New Game" onPress={handleNewGame} /></View>
                </View>
            </View>
        );
    };

    const gameOverCard = () => {
        return (
            <View style={styles.topContainer}>
                <Text>The game is over!</Text>
                <Text>sad face here</Text>
                <Text>{losingMsg}</Text>
            </View>
        );
    };

    const renderCard = (currentCard) => {
        if (currentCard === 'game') {
            return gameCard();
        }
        if (currentCard === 'wrongGuess') {
            return wrongGuessCard();
        }
        if (currentCard === 'winning') {
            return winningCard();
        }
        if (currentCard === 'gameOver') {
            return gameOverCard();
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
        flex: 1,
        justifyContent: 'center',
    },
    restartButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 60,
        margin: 10,
    },
    gamePanelContainer: {
        width: 280,
        padding: 30,
        backgroundColor: '#C0E4E4',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    topContainer: {
        flexDirection: 'column',
        marginBottom: 5,
        alignItems: 'center',
    },
    topMsgTextStyle: {
        color: '#483d8b',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    hintTextStyle: {
        color: '#ff7f50',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    middleContainer: {
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderButton: 15,
        borderBottomWidth: 1,
        borderColor: 'grey',
        height: 50,
        width: 80,
    },
    inputStyle: {
        margin: 5,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1e90ff',
    },
    bottomContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 15,
        marginBottom: 5,
    },
    systemMsgContainer: {
        marginBottom: 20,
    },
    systemMsgTextStyle: {
        color: 'grey',
        textAlign: 'center',
    },
    buttonStyle: {
        margin: 5,
    },
    imageStyle: {
        width: 100,
        height: 100,
        marginVertical: 15,
    },
});