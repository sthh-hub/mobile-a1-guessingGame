import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from '../Card';  
import commonStyles from '../../styles/styles';

const GameOverCard = ({ losingMsg }) => {
    return (
        <Card>
            <View style={styles.topContainer}>
                <Text style={styles.topMsgTextStyle}>The game is over!</Text>
                <Image style={styles.imageStyle} source={require('../../assets/gameOver.png')} alt="gameOverImage" />
                <Text>{losingMsg}</Text>
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
    imageStyle: {
        width: 100,
        height: 100,
        marginVertical: 15,
    },
});

export default GameOverCard;