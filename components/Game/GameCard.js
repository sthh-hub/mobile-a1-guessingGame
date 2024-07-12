import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../Card';  
import commonStyles from '../../styles/styles';
import colors from '../../styles/colors';

const GameCard = ({ guess, setGuess, hintMsg, attempt, timer, handleHint, handleGuess }) => {
    
    return (
        <Card>
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
                        autoFocus={false}
                    />
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
        </Card>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        ...commonStyles.topContainer,
    },
    topMsgTextStyle: {
        ...commonStyles.topMsgTextStyle,
    },
    hintTextStyle: {
        color: colors.hintColor,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    middleContainer: {
        alignItems: 'center',
    },
    inputContainer: {
        ...commonStyles.inputContainer,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 15,
        height: 50,
        width: 80,
    },
    inputStyle: {
        ...commonStyles.input,
        margin: 5,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.textSecondary,
    },
    bottomCardContainer: {
        ...commonStyles.bottomCardContainer,
    },
    systemMsgContainer: {
        marginTop: 2,
        marginBottom: 20,
    },
    systemMsgTextStyle: {
        color: 'grey',
        textAlign: 'center',
    },
    buttonStyle: {
        ...commonStyles.button,
        margin: 5,
    },
});

export default GameCard;