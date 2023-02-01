/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
    },
    imgBgr: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: 'white',
        resizeMode: 'cover',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
        fontSize: 16,
    },
});

export default style;
