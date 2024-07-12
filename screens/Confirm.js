import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import commonStyles from '../styles/styles';

export default function Confirm({ isModalVisible, name, email, goBackHandler, continueHandler }) {

    const handleContinue = () => {
        continueHandler('Game');
        goBackHandler(!isModalVisible);
    };

    const handleGoBack = () => {
        goBackHandler(!isModalVisible);
    };


    return (
        <Modal animationType="slide" visible={isModalVisible} transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.textStyle}>
                            Hello <Text style={{color: "#483d8b"}}>{name}</Text>!{'\n'}
                            Here is the email that you entered:{'\n'}
                            <Text style={{color: "#483d8b"}}>{email}</Text>
                            {'\n'}{'\n'}
                            If it is not correct, please go back and enter again.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Go back" onPress={handleGoBack} color="#C00404" />
                        <Button title="Continue" onPress={handleContinue} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        ...commonStyles.modalBackground,
    },
    modalContainer: {
        ...commonStyles.modalContainer,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        ...commonStyles.text,
    },
    buttonContainer: {
        ...commonStyles.buttonContainer,
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
    },
});