import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from '../styles/colors';
import commonStyles from '../styles/styles';


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
        } else if (valid) {
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
        } else if (valid) {
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
        setEmail('');
        setNameErrorMsg('');
        setMailErrorMsg('');
        setIsChecked(false);
        setIsStartDisabled(true);
    };

    const handleStart = () => {
        if (validateName(name) && validateEmail(email)) {
            nameHandler(name);
            emailHandler(email);
            startHandler(true);
            setNameErrorMsg('');
            setMailErrorMsg('');
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
                        onBlur={() => validateName(name)}
                        autoCapitalize={true}
                        autoFocus={false}
                    >
                    </ TextInput></View>
                <Text style={styles.errorMsgStyle}>{nameErrorMsg}</Text>
                <Text>Email address</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputStyle}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email..."
                        onBlur={() => validateEmail(email)}
                        autoCapitalize={false}
                        autoFocus={false}
                    >
                    </ TextInput></View>
                <Text style={styles.errorMsgStyle}>{mailErrorMsg}</Text>
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
                        <BouncyCheckbox marginRight={-7} unFillColor="#FFFFFF" isChecked={isChecked} onPress={toggleCheckbox} />
                        <Text style={{ marginTop: 3 }}>I'm not a robot.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}><Button title="Reset" onPress={resetForm} color={colors.buttonRed} /></View>
                    <View style={styles.buttonStyle}><Button title="Start" onPress={handleStart} disabled={isStartDisabled} /></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    startContainer: {
        ...commonStyles.container,
    },
    loginContainer: {
        ...commonStyles.card,
        width: 250,
    },
    inputContainer: {
        ...commonStyles.inputContainer,
    },
    inputStyle: {
        ...commonStyles.input,
    },
    errorMsgStyle: {
        ...commonStyles.errorText,
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        ...commonStyles.buttonContainer,
    },
    buttonStyle: {
        ...commonStyles.button,
    },
});