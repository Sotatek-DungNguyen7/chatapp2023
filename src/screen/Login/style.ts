/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../themes/colors';
// import styles from '../../themes/styles';

const {
    // height,
    width} = Dimensions.get('window');

const style = StyleSheet.create({
  chatIcon: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    tintColor: colors.blueMain,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black,
  },
  with50: {
    width: '50%',
  },
  itemCenter: {
    alignSelf: 'center',
  },
  flex3: {
    flex: 3,
  },
  flex5: {
    flex: 5,
  },
  flex2: {
    flex: 2,
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
    // backgroundColor: colors.blueMain,
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
  top30: {
    marginTop: 30,
  },
  textRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blueMain,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: colors.black,
  },
  otherMethods: {
    padding: 8,
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  textError: {
    marginBottom: 8,
    marginTop: 3,
    fontSize: 14,
    color: colors.red,
  },
});

export default style;
