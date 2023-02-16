/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {createUserWithEmailAndPassword} from 'firebase/auth';
import * as React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {auth} from '../../../firebase/firebase';
import ASSETS from '../../assets/ASSETS';
import {NaviProps} from '../../Model/NaviProps';
import {Screens} from '../../navigation/Screens';
import colors from '../../themes/colors';
import styles from '../../themes/styles';
import {isValidEmail, isValidPassword} from '../../utilites/Validations';
import style from './style';

interface Props extends NaviProps {}

interface State {
  email: string;
  password: string;
  retypePassword: string;
  errorEmail: string;
  errorPassword: string;
}

const Register = (props: Props) => {
  // const emailEr = 'email không đúng định dạng';
  // const passwordEr = 'email không đúng định dạng';

  const [state, setState] = React.useState<State>({
    email: 'abc123@gmail.com',
    password: '123456',
    retypePassword: '654321',
    errorEmail: '',
    errorPassword: '',
  });

  React.useEffect(() => {
    //   const xx = auth;
  });

  const isValidateRegister = () => {
    return (
      state.email.length > 0 &&
      state.password.length > 0 &&
      state.retypePassword.length > 0 &&
      isValidEmail(state.email) === true &&
      isValidPassword(state.password) === true &&
      state.password === state.retypePassword
    );
  };

  return (
    <SafeAreaView style={[style.container, styles.paddingVertical10]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.alignSpace,
            styles.marginBottom10,
            styles.maginHorizontal15,
            style.flex25,
          ]}>
          <View style={style.with50}>
            <Text style={style.title}>Here's your first step with us!</Text>
          </View>
          <View style={[style.with50]}>
            <Image
              source={ASSETS.chatIcon}
              style={[style.chatIcon, style.itemCenter]}
            />
          </View>
        </View>
        <View
          style={[
            style.registrationFrame,
            styles.maginHorizontal10,
            style.flex55,
          ]}>
          <View>
            <Text style={style.titleTextInput}>Email:</Text>
            <TextInput
              placeholder="example@gmail.com"
              style={style.textInput}
              value={state.email}
              onChangeText={(emailInput: string) => {
                if (isValidEmail(emailInput) === false) {
                  setState({
                    ...state,
                    email: emailInput,
                    errorEmail: 'email không đúng định dạng',
                  });
                } else {
                  setState({...state, email: emailInput, errorEmail: ''});
                }
                // setState({ ...state, email: emailInput });
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
            <Text style={[style.textError, styles.marginBottom5]}>
              {state.errorEmail}
            </Text>
          </View>
          <View>
            <Text style={style.titleTextInput}>Mật khẩu:</Text>
            <TextInput
              placeholder="enter your password"
              style={style.textInput}
              secureTextEntry={true}
              value={state.password}
              onChangeText={(passwordInput: string) => {
                // if (isValidPassword(passwordInput) == false) {
                //     setState({ ...state, errorPassword: 'mật khẩu phải có ít nhất 6 ký tự' });
                // } else {
                //     setState({ ...state, errorPassword: '' });
                // }
                // setState({ ...state, password: passwordInput })
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
            <Text style={[style.textError, styles.marginBottom5]}>
              {state.errorPassword}
            </Text>
          </View>
          <View>
            <Text style={style.titleTextInput}>Nhập lại mật khẩu:</Text>
            <TextInput
              placeholder="re-enter your password"
              style={style.textInput}
              value={state.retypePassword}
              secureTextEntry={true}
              onChangeText={(retypePassword: any) => {
                setState({...state, retypePassword: retypePassword});
                // if (isValidPassword(passwordInput) == false) {
                //     setState({ ...state, errorPassword: 'mật khẩu phải có ít nhất 6 ký tự' });
                // } else {
                //     setState({ ...state, errorPassword: '' });
                // }
                // setState({ ...state, password: passwordInput })
                // const tempValue = {
                //     ...state, retypePassword: retypePassword,
                //     errorPassword: ''
                // }
                // if (retypePassword && isValidPassword(retypePassword) == false) {
                //     tempValue.errorPassword = 'mật khẩu phải có ít nhất 6 ký tự'
                // }
                // setState(tempValue)
              }}
            />
            {/* <Text style={[style.textError, styles.marginBottom5]}>{state.errorPassword}</Text> */}
          </View>
          <TouchableOpacity
            style={[
              style.loginButton,
              style.top20,
              {
                backgroundColor:
                  isValidateRegister() === true
                    ? colors.blueMain
                    : colors.inActive,
              },
            ]}
            disabled={isValidateRegister() === false}
            onPress={() => {
              createUserWithEmailAndPassword(auth, state.email, state.password)
                .then(userCredential => {
                  // debugger
                  const user = userCredential.user;
                  // debugger
                })
                .catch(error => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // debugger
                  Alert.alert(`Cannot signin, error: ${errorMessage}`);
                });
            }}>
            <Text style={style.textLoginButton}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.marginTop20, style.itemCenter]}
            onPress={() => props.navigation.navigate(Screens.Login)}>
            <Text style={style.textRegister}>Have account? Login now</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.maginHorizontal10, style.flex25]}>
          <View style={[styles.alignCenter, styles.marginTop10]}>
            <View style={style.hr} />
            <Text style={style.otherMethods}>Use other methods?</Text>
            <View style={style.hr} />
          </View>
          <View style={[styles.alignCenter, style.itemCenter]}>
            <TouchableOpacity style={styles.right10}>
              <FontAwesome5Icon
                name="facebook"
                size={35}
                color={colors.facebook}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntIcon name="google" size={35} color={colors.google} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
