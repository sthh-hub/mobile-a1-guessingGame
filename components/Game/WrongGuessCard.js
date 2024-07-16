import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../Card';  
import commonStyles from '../../styles/styles';

const WrongGuessCard = ({ tryAgainHandler, endGameHandler }) => {

    const handleTryAgain = () => {
        tryAgainHandler(true);
    };

    const handleEndGame = () => {
        endGameHandler(true);
    };

    return (
        <Card>
            <View style={styles.topContainer}>
                <Text style={styles.topMsgTextStyle}>Your guess was incorrect.</Text>
            </View>
            <View style={styles.bottomCardContainer}>
                <View style={styles.buttonStyle}><Button title="Try Again" onPress={handleTryAgain} /></View>
                <View style={styles.buttonStyle}><Button title="End The Game" onPress={handleEndGame} /></View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        ...commonStyles.topContainer,
        marginBottom: 30
    },
    topMsgTextStyle: {
        ...commonStyles.topMsgTextStyle,
    },
    bottomCardContainer: {
        ...commonStyles.bottomCardContainer,
        height: 80,
    },
    buttonStyle: {
        ...commonStyles.button,
        margin: 5,
    },
});

export default WrongGuessCard;