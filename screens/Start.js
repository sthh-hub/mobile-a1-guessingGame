import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, CheckBox } from 'react-native';

export default function Start() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const validateName = (name) => {
        // name length need to >= 2 and have to be characters only
        const re = /^[a-zA-Z]{2,}$/;
        const valid = re.test(name);
        if (valid) {
            setErrorMsg('');
        } else {
            setErrorMsg('Please enter a valid name.');
        }
        return valid;
    };
    const validateEmail = (email) => {
        // ^[A-Z0-9+_.-]+@[A-Z0-9.-]+$
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const valid = re.test(email);
        if (valid) {
            setErrorMsg('');
        } else {
            setErrorMsg('Please enter a valid email address.');
        }
        return valid;
    }

    return (
        <View style={styles.startContainer}>
            <View style={styles.loginContainer}>
                <Text>Name</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputStyle}
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter your name..."
                        autoCapitalize={true}
                        autoFocus={true}
                    >
                    </ TextInput></View>
                <Text>Email address</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputStyle}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email..."
                        autoCapitalize={false}
                        autoFocus={false}
                    >
                    </ TextInput></View>
                <Text style={styles.errorMsgStyle}>{errorMsg}</Text>
                {/* <View style={styles.checkboxContainer}>
                    <CheckBox value={checkbox} onValueChange={setCheckbox(!checkbox)} />
                    <Text>I'm not a robot.</Text>
                </View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    startContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: 250,
        padding: 30,
        margin: 20,
        backgroundColor: '#C0E4E4',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
    },
    errorMsgStyle: {
        color: 'grey',
        margin: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    inputContainer: {
        marginTop: 15,
        marginBottom: 15,
        borderButton: 2,
        borderColor: 'black',
    },
    inputStyle: {
        color: 'black',
        marginBottom: 10,
    },
});