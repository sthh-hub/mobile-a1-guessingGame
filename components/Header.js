import { StyleSheet, View, Text } from "react-native";
import React from "react";

const Header = ( {children} ) => {
    return (
        <View>
            <Text style={styles.headerStyle}>Welcome!</Text>
            {children}
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerStyle: {
        color: '#C00404',
        textBold: 'bold',
        fontSize: 20,
    },
});
