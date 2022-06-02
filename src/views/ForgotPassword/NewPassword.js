import React, { useState } from 'react'
import {
  ImageBackground,
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

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onChangePressed = () => {
    navigation.navigate('ResetSuccess');
  };

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        display: "flex",
        flex: 1,
        height: '100%',
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ marginTop: 160 }}>

          <Text style={{
            fontFamily: 'Poppins', fontSize: 29, fontWeight: 'bold', textAlign: "center",
            color: COLORS.dark
          }}>
            New Password
          </Text>

          <Text style={{
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: 'normal',
            color: '#656363',
            marginTop: 50,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#D2F3C6',
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 25,
          }}>
            Please create a new password that you don't use on any other site
          </Text>
        </View>

        <View style={styles.root}>
          <CustomInput
            placeholder="Create New Password"
            value={newPassword}
            setValue={setNewPassword}
            secureTextEntry
          />

          <CustomInput
            placeholder="Confirm your Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <CustomButton
            text="Change"
            onPress={onChangePressed}
          />
        </View>
      </ScrollView>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center'
  }

});

export default NewPassword;