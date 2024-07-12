import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Card from '../Card';  
import commonStyles from '../../styles/styles';

const WinningCard = ({ winningMsg, target, handleNewGame }) => {
    return (
        <Card>
            <View style={styles.topContainer}>
                <Text style={styles.topMsgTextStyle}>Congradulation!</Text>
                <Text>Your guess was correct.</Text>
                <Text>{winningMsg}</Text>
                <Image style={styles.imageStyle} source={{ uri: `https://picsum.photos/id/${target}/100/100` }} alt="winningImage" />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.buttonStyle}><Button title="New Game" onPress={handleNewGame} /></View>
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
        marginBottom: 5,
    },
    bottomCardContainer: {
        ...commonStyles.bottomCardContainer,
    },
    buttonStyle: {
        ...commonStyles.button,
        margin: 5,
    },
    imageStyle: {
        width: 100,
        height: 100,
        marginVertical: 15,
    },
});

export default WinningCard;