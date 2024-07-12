import { StyleSheet, View, Text } from "react-native";
import React from "react";
import commonStyles from '../styles/styles';

const Header = ( {children} ) => {
    return (
        <View>
            <Text style={styles.headerStyle}>Number Guessing</Text>
            {children}
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerStyle: {
        ...commonStyles.headerText,
    },
});