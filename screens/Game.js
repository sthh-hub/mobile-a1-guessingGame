import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Game() {
    const [target, setTarget] = useState(0);
    const [guess, setGuess] = useState('');
    const [attempt, setAttempt] = useState(4);
    const [timer, setTimer] = useState(60);
    const [hintMsg, setHintMsg] = useState('');
    const [losingMsg, setLosingMsg] = useState('');
    const [currentCard, setCurrentCard] = useState('winning');

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    const checkNumber = (guess) => {
        guessNumber = parseInt(guess);
        if (guessNumber === target) {
            alert('You win!');
            setAttempt(4);
            setTimer(60);
        } else {
            setAttempt(attempt - 1);
            if (attempt === 0) {
                alert('You lose!');
                setAttempt(4);
                setTimer(60);
            }
        }
    };

    const gameCard = () => {
        return (
            <View>
                <View style={styles.topContainer}>
                    <Text style={styles.topMsgTextStyle}>Guess a Number{"\n"}from 1 to 100</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputStyle}
                        value={guess}
                        onChangeText={setGuess}
                        placeholder="?"
                        onBlur={() => checkNumber(guess)}
                        autoCapitalize={false}
                        autoFocus={true}
                    >
                    </ TextInput>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.systemMsgContainer}>
                        <Text style={styles.systemMsgTextStyle}>Attempts left: {attempt}</Text>
                        <Text style={styles.systemMsgTextStyle}>Timer: {timer}</Text>
                    </View>
                    <View style={styles.buttonStyle}><Button title="Use a Hint" onPress={''} color="#ff7f50" /></View>
                    <View style={styles.buttonStyle}><Button title="Submit Guess" onPress={''} disabled={isSubmitDisabled} /></View>
                </View>
            </View>
        );
    };

    const losingCard = () => {
        return (
            <View>
                <Text>You did not guess correct!</Text>
                <View style={styles.buttonStyle}><Button title="Try Again" onPress={''} /></View>
                <View style={styles.buttonStyle}><Button title="End The Game" onPress={''} /></View>
            </View>
        );
    };

    const winningCard = () => {
        return (
            <View>
                <Text>You guessed correct!</Text>
                <Text>Attempts used: {attempt}</Text>
                <View style={styles.buttonStyle}><Button title="New Game" onPress={''} /></View>
            </View>
        );
    };

    const gameOverCard = () => {
        return (
            <View>
                <Text>The game is over!</Text>
                <Text>sad face here</Text>
            </View>
        );
    };

    const renderCard = (currentCard) => {
        if (currentCard === 'game') {
            return gameCard();
        }
        if (currentCard === 'losing') {
            return losingCard();
        }
        if (currentCard === 'winning') {
            return winningCard();
        }
    };

    return (
        <View style={styles.gameContainer}>
            <View style={styles.restartButtonStyle}>
                <Button title="Restart" onPress={''} />
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
        alignItems: 'center',
    },
    topContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 5,
    },
    topMsgTextStyle: {
        color: '#483d8b',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
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
});