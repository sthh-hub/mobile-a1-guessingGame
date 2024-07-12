import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function Confirm({ isModalVisible, name, email, goBackHandler, continueHandler }) {

    const handleContinue = () => {
        continueHandler('Game');
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
        flex: 1,
        backgroundColor: 'rgba(50, 50, 50, 0.75)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 300,
        padding: 30,
        margin: 20,
        backgroundColor: '#C0E4E4',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'DarkGrey',
        fontSize: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
    },
});