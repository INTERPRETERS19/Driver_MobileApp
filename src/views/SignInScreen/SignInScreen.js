import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
//import RadioForm from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import COLORS from '../../components/colors';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Dashboard');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('OTP');
  };

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        width: '100%',
        height: '100%'
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ marginTop: 160 }}>

          <Text style={{
            fontFamily: 'Poppins', fontSize: 29, fontWeight: 'bold', textAlign: "center",
            color: COLORS.dark
          }}>
            Welcome!
          </Text>
          <Text style={{ fontFamily: 'Poppins', fontSize: 17, fontWeight: 'bold', textAlign: "center", color: COLORS.light }}>
            Sign in to your account to continue
          </Text>
        </View>

        <View style={styles.root}>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
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
        <View style={{ marginTop: 20 }}>
          <CustomButton text="Sign In" onPress={onSignInPressed} />
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
