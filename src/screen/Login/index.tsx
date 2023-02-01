/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import ASSETS from '../../assets/ASSETS';
import colors from '../../themes/colors';
import styles from '../../themes/styles';
import style from './style';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword} from '../../utilites/Validations';
import {NaviProps} from '../../Model/NaviProps';
import {Screens} from '../../navigation/Screens';

interface Props extends NaviProps {}

interface State {
  email: string;
  password: string;
  errorEmail: string;
  errorPassword: string;
}

const Login = (props: NaviProps) => {
  const [state, setState] = React.useState<State>({
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
  });

  const isValidateLogin = () => {
    return (
      state.email.length > 0 &&
      state.password.length > 0 &&
      isValidEmail(state.email) === true &&
      isValidPassword(state.password) === true
    );
  };

  const onLogin = React.useCallback(() => {
    if (isValidEmail(state.email) === false) {
      setState({...state, errorEmail: 'email không đúng định dạng'});
    } else {
      setState({...state, errorEmail: ''});
    }

    if (isValidPassword(state.password) === false) {
      setState({...state, errorPassword: 'mật khẩu phải có ít nhất 6 ký tự'});
    } else {
      setState({...state, errorPassword: ''});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.email, state.password]);

  return (
    <SafeAreaView style={[styles.container, styles.padding15]}>
      <View style={[styles.alignSpace, styles.marginBottom20]}>
        <View style={style.with50}>
          <Text style={style.title}>Already have an Account?</Text>
        </View>
        <View style={[style.with50]}>
          <Image
            source={ASSETS.chatIcon}
            style={[style.chatIcon, style.itemCenter]}
          />
        </View>
      </View>
      {/* <View style={style.flex5}> */}
      <View>
        <Text style={style.titleTextInput}>Email:</Text>
        <TextInput
          placeholder="example@gmail.com"
          style={style.textInput}
          value={state.email}
          onChangeText={emailInput => {
            if (isValidEmail(emailInput) === false) {
              setState({
                ...state,
                email: emailInput,
                errorEmail: 'email không đúng định dạng',
              });
            } else {
              setState({...state, email: emailInput, errorEmail: ''});
            }
            console.log(emailInput);

            const tempValue = {
              ...state,
              email: emailInput,
              errorEmail: '',
            };
            if (emailInput && isValidEmail(emailInput) === false) {
              tempValue.errorEmail = 'email không đúng định dạng';
            }
            setState(tempValue);
          }}
        />
        <Text style={[style.textError]}>{state.errorEmail}</Text>
      </View>
      <View>
        <Text style={style.titleTextInput}>Mật khẩu:</Text>
        <TextInput
          placeholder="enter your password"
          style={style.textInput}
          value={state.password}
          onChangeText={passwordInput => {
            const tempValue = {
              ...state,
              password: passwordInput,
              errorPassword: '',
            };
            if (passwordInput && isValidPassword(passwordInput) === false) {
              tempValue.errorPassword = 'mật khẩu phải có ít nhất 6 ký tự';
            }
            setState(tempValue);
          }}
        />
        <Text style={[style.textError]}>{state.errorPassword}</Text>
      </View>
      <TouchableOpacity
        style={[
          style.loginButton,
          style.top30,
          {
            backgroundColor:
              isValidateLogin() === true ? colors.blueMain : colors.inActive,
          },
        ]}
        disabled={isValidateLogin() === false}
        onPress={() => {
          Alert.alert(`Email = ${state.email}, password = ${state.password}`);
        }}>
        <Text style={style.textLoginButton}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.marginTop20, style.itemCenter]}
        onPress={() => props.navigation.navigate(Screens.Register)}>
        <Text style={style.textRegister}>New user? Register now</Text>
      </TouchableOpacity>
      <View style={[styles.alignCenter, style.top30]}>
        <View style={style.hr} />
        <Text style={style.otherMethods}>Use other methods?</Text>
        <View style={style.hr} />
      </View>
      {/* </View> */}
      <View style={[styles.alignCenter, style.itemCenter]}>
        <TouchableOpacity style={styles.right10}>
          <FontAwesome5Icon name="facebook" size={35} color={colors.facebook} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntIcon name="google" size={35} color={colors.google} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
