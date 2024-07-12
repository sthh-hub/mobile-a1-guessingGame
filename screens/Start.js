import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Start({ nameHandler, emailHandler, startHandler }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false)
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [mailErrorMsg, setMailErrorMsg] = useState('');
    const [isStartDisabled, setIsStartDisabled] = useState(true);

    const validateName = (name) => {
        // name length need to >= 2 and have to be characters only
        const re = /^[a-zA-Z]{2,}$/;
        const valid = re.test(name);
        if (valid) {
            setName(name);
        } else if (valid || name === '') {
            setNameErrorMsg('');
        } else {
            setNameErrorMsg('Please enter a valid name.');
        }
        return valid;
    };

    const validateEmail = (email) => {
        // ^[A-Z0-9+_.-]+@[A-Z0-9.-]+$
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i;
        const valid = re.test(email);
        if (valid) {
            setEmail(email);
        } else if (valid || email === '') {
            setMailErrorMsg('');
        } else {
            setMailErrorMsg('Please enter a valid email address.');
        }
        return valid;
    }

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        setIsStartDisabled(isChecked); // if isChecked is true, then isStartDisabled is false
    };

    const resetForm = () => {
        setName('');
        setNameErrorMsg('');
        setEmail('');
        setMailErrorMsg('');
        setIsChecked(false);
        setIsStartDisabled(true);
    };

    const handleStart = () => {
        if (validateName(name) && validateEmail(email)) {
            nameHandler(name);
            emailHandler(email);
            startHandler(true);
        }
    };


    return (
        <View style={styles.startContainer}>
            <View style={styles.loginContainer}>
                <Text>Name</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputStyle}
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter your name..."
                        onBlur={(valid) => validateName(name)}
                        autoCapitalize={true}
                        autoFocus={true}
                    >
                    </ TextInput></View>
                <Text style={styles.errorMsgStyle}>{nameErrorMsg}</Text>
                <Text>Email address</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputStyle}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email..."
                        onBlur={(valid) => validateEmail(email)}
                        autoCapitalize={false}
                        autoFocus={false}
                    >
                    </ TextInput></View>
                <Text style={styles.errorMsgStyle}>{mailErrorMsg}</Text>
                <View style={styles.checkboxContainer}>
                    <BouncyCheckbox marginRight={-7} unFillColor="#FFFFFF" isChecked={isChecked} onPress={toggleCheckbox} />
                    <Text style={{ marginTop: 3 }}>I'm not a robot.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}><Button title="Reset" onPress={resetForm} color="#C00404" /></View>
                    <View style={styles.buttonStyle}><Button title="Start" onPress={handleStart} disabled={isStartDisabled} /></View>
                </View>
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
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    inputContainer: {
        marginTop: 10,
        borderButton: 15,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    inputStyle: {
        color: 'DarkGrey',
        marginBottom: 2,
        marginLeft: 2,
    },
    errorMsgStyle: {
        color: '#F00903',
        marginLeft: 2,
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'left',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    buttonStyle: {
        margin: 15,
    },
});