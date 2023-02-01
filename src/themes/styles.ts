/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    alignRow: {
        flexDirection: 'row',
    },
    alignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    alignSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    padding15: {
        padding: 15,
    },
    padding10: {
        padding: 10,
    },
    paddingHorizontal10: {
        paddingHorizontal: 10,
    },
    paddingHorizontal15: {
        paddingHorizontal: 15,
    },
    paddingVertical10: {
        paddingVertical: 10,
    },
    paddingVertical5: {
        paddingVertical: 5,
    },
    maginHorizontal10: {
        marginHorizontal: 10,
    },
    maginHorizontal15: {
        marginHorizontal: 15,
    },
    marginTop5: {
        marginTop: 5,
    },
    marginTop10: {
        marginTop: 10,
    },
    marginTop20: {
        marginTop: 20,
    },
    marginBottom20: {
        marginBottom: 20,
    },
    marginBottom15: {
        marginBottom: 15,
    },
    marginBottom10: {
        marginBottom: 10,
    },
    marginBottom5: {
        marginBottom: 5,
    },
    right10: {
        marginRight: 10,
    },
    marginVertical5: {
        marginVertical: 5,
    },
});

export default styles;
