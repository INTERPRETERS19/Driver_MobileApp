import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';
import COLORS from '../../components/colors';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';

const OTP = () => {
  const navigation = useNavigation();

  const onVerifyPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onBacktoMyAccountPressed = () => {
    navigation.navigate('SignIn');
  };

  const onResendPressed = () => {
    navigation.navigate('OTP');
  };

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        display: 'flex',
        flex: 1,
        height: '100%',
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 29,
            fontWeight: 'bold',
            textAlign: 'center',
            justifyContent: 'center',
            padding: 10,
            color: COLORS.dark,
          }}>
          Confirm OTP
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#ffffff',

          flex: 3,
          padding: 20,
          borderRadius: 20,
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: 'normal',
              textAlign: 'center',
              color: '#656363',
              borderRadius: 9,
              marginTop: 27,
            }}>
            Enter OTP we just sent to your mobile {'\n'} number: +94******567
          </Text>

          <View>
            <OTPTextView
              handleTextChange={e => {}}
              containerStyle={styles.textInputContainer}
              textInputStyle={styles.roundedTextInput}
              inputCount={4}
              inputCellLength={1}
            />
          </View>

          <CustomButton text="Verify" onPress={onVerifyPressed} />
          <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <CustomButton text="Re-send" onPress={onResendPressed} type="SUB" />
          </View>
        </View>
      </View>
      <View>
        <CustomButton
          text="Back to my Account"
          onPress={onBacktoMyAccountPressed}
          type="TERTIARY"
        />
      </View>
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

  textInputContainer: {
    marginBottom: 20,
    marginTop: 20,
  },

  roundedTextInput: {
    width: 70,
    height: 70,
    borderRadius: 11,
    borderWidth: 5,
    backgroundColor: '#F5F6F7',
  },
});

export default OTP;
