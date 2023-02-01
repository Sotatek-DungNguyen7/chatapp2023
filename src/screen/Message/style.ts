/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import styles from '../../themes/styles';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  titleChatList: {
    fontSize: fonts.default,
    color: 'black',
  },
  iconsRecycling: {
    width: 16,
    height: 16,
    tintColor: colors.inActive,
    resizeMode: 'contain',
  },
  chatList: {
    // flex: 1,
    // backgroundColor: 'orange',
    paddingHorizontal: 10,
  },
  chatItem: {
    marginVertical: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
    ...styles.alignSpace,
  },
  imageItem: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  unreadMessages: {
    backgroundColor: colors.red,
    right: 10,
    top: -3,
    position: 'absolute',
    borderRadius: 9,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberUnreadMessages: {
    fontSize: 10,
    color: colors.white,
  },
  nameUser: {
    fontSize: fonts.default,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageUser: {
    fontSize: fonts.small,
    color: colors.inActive,
  },
  timeItem: {
    fontSize: fonts.small,
    color: colors.inActive,
  },
});

export default style;
