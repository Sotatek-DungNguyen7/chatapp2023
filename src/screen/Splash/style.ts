/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00CCFF',
  },
  chatIcon: {
    width: 150,
    height: 150,
    // marginBottom: 10,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default style;
