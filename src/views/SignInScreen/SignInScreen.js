import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import client from '../../routes/client';
import {useLogin} from '../../context/LoginProvider';
import {isValidEmail, isValidObjField, updateError} from '../../utils/methods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import COLORS from '../../components/colors';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput2';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
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
  const [passwordVisible, setPasswordVisible] = useState(true);

  const {email, password} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    // if (!password.trim() || password.length < 8)
    //   return updateError('Password is incorrect!', setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post('/sign-in', {...userInfo});

        if (res.data.success) {
          setUserInfo({email: '', password: ''});
          setProfile(res.data.user);
          setIsLoggedIn(true);
          storeUser(res.data.user);
        } else {
          updateError(res.data.message, setError);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const navigation = useNavigation();

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot');
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
            setValue={value =>
              setUserInfo({...userInfo, email: value.toLowerCase()})
            }
          />
          <View style={styles.container1}>
            <TextInput
              placeholder="password"
              placeholderTextColor={'#c0c6c9'}
              value={password}
              // setValue={value => setUserInfo({...userInfo, password: value})}
              onChangeText={value =>
                setUserInfo({...userInfo, password: value})
              }
              secureTextEntry={passwordVisible}
              right={
                <TextInput.Icon
                  name={passwordVisible ? 'eye-off' : 'eye'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}></View>
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
  container1: {
    backgroundColor: 'white',
    width: '100%',
    fontFamily: 'Poppins-Medium',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 7,
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
