import { StyleSheet } from 'react-native';
import colors from './colors';

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 280,
        padding: 30,
        margin: 20,
        backgroundColor: colors.boxBackground,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    text: {
        color: colors.inputText,
        fontSize: 15,
    },
    errorText: {
        color: colors.errorRed,
        marginLeft: 2,
        marginBottom: 20,
    },
    inputContainer: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: colors.inputBorder,
    },
    input: {
        color: colors.inputText,
        marginBottom: 2,
        marginLeft: 2,
    },
    topContainer: {
        flexDirection: 'column',
        marginBottom: 5,
        alignItems: 'center',
    },
    topMsgTextStyle: {
        color: colors.textPrimary,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    bottomCardContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        margin: 15,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: colors.modalBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 300,
        padding: 30,
        margin: 20,
        backgroundColor: colors.boxBackground,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    headerText: {
        color: colors.buttonRed,
        fontWeight: 'bold',
        fontSize: 23,
    },
});

export default commonStyles;