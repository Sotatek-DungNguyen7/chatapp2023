/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import styles from '../../themes/styles';

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.blueMain,
        paddingHorizontal: 15,
        paddingVertical: 10,
        ...styles.alignSpace,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    },
});

export default style;