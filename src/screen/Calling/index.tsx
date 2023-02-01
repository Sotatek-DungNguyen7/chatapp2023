/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import style from './style';

interface State {}

const Calling = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text />
    </SafeAreaView>
  );
};

export default Calling;
