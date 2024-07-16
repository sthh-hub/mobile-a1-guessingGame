import React from 'react';
import { View, StyleSheet } from 'react-native';
import commonStyles from '../styles/styles';

const Card = ({ children, style }) => {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        ...commonStyles.card,
    },
});

export default Card;