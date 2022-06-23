import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import client from '../../routes/client';
import {useLogin} from '../../context/LoginProvider';
import {isValidEmail, isValidObjField, updateError} from '../../utils/methods';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
//import FormInput from '../../components/FormInput';
import COLORS from '../../components/colors';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';

const storeUser = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@MyApp_user', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const SignInScreen = () => {
  const {setIsLoggedIn, setProfile} = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isSelected, setSelection] = useState(false);
  const {email, password} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 8)
      return updateError('Password is too short!', setError);

    return true;
  };

  // const storeUser = async value => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem('@storage_Key', jsonValue);
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key');
  //     if (value !== null) {
  //       console.log(value);
  //       // value previously stored
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post('/sign-in', {...userInfo});

        if (res.data.success) {
          setUserInfo({email: '', password: ''});
          setProfile(res.data.user);
          setIsLoggedIn(true);
          storeUser(res.data.user);
        }

        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const navigation = useNavigation();

  const onForgotPasswordPressed = () => {
    navigation.navigate('OTP');
  };

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 160}}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 29,
              fontWeight: 'bold',
              textAlign: 'center',
              color: COLORS.dark,
            }}>
            Welcome!
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              color: COLORS.light,
            }}>
            Sign in to your account to continue
          </Text>
        </View>

        <View style={styles.root}>
          {error ? (
            <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
              {error}
            </Text>
          ) : null}
          <CustomInput
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            setValue={value => setUserInfo({...userInfo, email: value})}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={value => setUserInfo({...userInfo, password: value})}
            secureTextEntry
          />
          {/* <FormInput
            value={email}
            onChangeText={value => handleOnChangeText(value, 'email')}
            label="Email"
            placeholder="example@email.com"
            autoCapitalize="none"
          />
          <FormInput
            value={password}
            onChangeText={value => handleOnChangeText(value, 'password')}
            label="Password"
            placeholder="********"
            autoCapitalize="none"
            secureTextEntry
          /> */}
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text
              style={{
                marginTop: 5,
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
                color: COLORS.dark,
              }}>
              Remember me
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          {/* <CustomButton text="Sign In" onPress={onSignInPressed} /> */}
          <CustomButton text="Sign In" onPress={submitForm} />
          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 25,
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default SignInScreen;
