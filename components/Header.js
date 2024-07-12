import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Colors from "../constants/colors";

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
        color: Colors.buttonRed,
        fontWeight: 'bold',
        fontSize: 23,
    },
});
