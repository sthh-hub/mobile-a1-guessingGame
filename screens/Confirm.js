import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function Confirm({ isModalVisible, name, email }) {

    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    const handleGameStart = () => {

    };

    const handleGoBack = () => {
        goBackHandler(!isModalVisible);
    };


    return (
        <Modal animationType="slide" visible={isModalVisible} transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.contentContainer}>
                        <Text>
                            Hello {name}{'\n'}
                            Here is the email that you enterd:{'\n'}
                            {email}{'\n'}{'\n'}
                            If it is not correct, please go back and enter again.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Go back" onPress={handleGoBack} />
                        <Button title="Continue" onPress={handleGameStart} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(50, 50, 50, 0.7)',
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
    },
});