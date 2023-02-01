/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {View, Text, SafeAreaView, StatusBar, Image} from 'react-native';
import ASSETS from '../../assets/ASSETS';
import style from './style';

interface State {}

const Splash = () => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image source={ASSETS.chatIcon} style={style.chatIcon} />
        <Text style={style.title}>TALKME</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
