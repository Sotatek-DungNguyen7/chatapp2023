/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../themes/colors';
// import styles from '../../themes/styles';

const {
    // height,
    width,
} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.blueMain,
    flex: 1,
  },
  chatIcon: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
  },
  with50: {
    width: '50%',
  },
  itemCenter: {
    alignSelf: 'center',
  },
  registrationFrame: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
  titleTextInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blueMain,
  },
  textInput: {
    fontSize: 16,
    color: colors.black,
    paddingVertical: 7,
    borderBottomColor: colors.blueMain,
    borderBottomWidth: 0.5,
  },
  loginButton: {
    width: width / 2,
    backgroundColor: colors.blueMain,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
  textLoginButton: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  top20: {
    marginTop: 20,
  },
  textRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blueMain,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: colors.white,
  },
  otherMethods: {
    padding: 8,
    fontSize: 16,
    color: colors.white,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  textError: {
    fontSize: 14,
    color: colors.red,
  },
  flex25: {
    flex: 25,
  },
  flex55: {
    flex: 55,
  },
  flex20: {
    flex: 20,
  },
});

export default style;
