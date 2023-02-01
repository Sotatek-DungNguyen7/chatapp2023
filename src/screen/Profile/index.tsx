/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import ASSETS from '../../assets/ASSETS';
import styles from '../../themes/styles';
import style from './style';
// import { useDispatch, useSelector } from 'react-redux';
// import { doLogout } from '../../redux/actions';
// import { RootState } from '../../redux/reducers';

function Profile() {
  // const currentUser = useSelector((state: RootState) => state.authReducer.user);

  // const dispatch = useDispatch();

  // const onLogout = () => dispatch(doLogout());

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={ASSETS.bgrProfile} style={style.imgBgr}>
        <Image source={ASSETS.user1} style={style.avatar} />
        <Text style={[style.userName, styles.marginTop5]}>Jase</Text>
      </ImageBackground>
      <TouchableOpacity
        style={style.loginBtn}
        // onPress={onLogout}
      >
        <Text style={style.loginText}>LOGOUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Profile;
