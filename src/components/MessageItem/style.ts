/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {deviceWidth, deviceHeight} from '../../themes/styles';

const style = StyleSheet.create({
  messageUserReceived: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageViewReceived: {
    // flex: 1,
    width: deviceWidth * 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageReceived: {
    fontSize: fonts.default,
    color: colors.black,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 8,
    backgroundColor: colors.message,
  },
  messageUserSent: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  messageViewSent: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: deviceWidth * 0.7,
  },
  messageSent: {
    fontSize: fonts.default,
    color: colors.black,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 8,
    backgroundColor: colors.message,
  },
  imageUser: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginRight: 12,
    marginStart: 10,
    borderRadius: 20,
  },
  imageNull: {
    width: 40,
    height: 40,
    marginRight: 12,
    marginStart: 10,
  },
});

export default style;
