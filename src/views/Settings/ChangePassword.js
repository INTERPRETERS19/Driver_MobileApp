import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [oldPassword, setoldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatnewPassword, setRepeatNewPassword] = useState('');

  const navigation = useNavigation();

  const onChangePressed = () => {
    navigation.navigate('Dashboard');
  };
  const onbackPressed = () => {
    navigation.navigate('Settings');
  };

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        flex: 1,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.topbar]}>
          <Icon name="chevron-back" size={30} color="#9C9C9C" onPress={onbackPressed} />
        </View>
        <View style={styles.root}>
          <View style={{ marginTop: 40 }}>

            <Text style={{
              fontFamily: 'Poppins-Bold', fontSize: 29, textAlign: "center",
              color: '#000000',
            }}>
              Change Password
            </Text>

            <Text style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              textAlign: "left",
              color: '#656363',
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 15,
              marginRight: 15,
              backgroundColor: '#D2F3C6',
              borderRadius: 9,
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
              Please create a new password that you don't use on any other site
            </Text>
          </View>

          <CustomInput placeholder="Enter current password"
            value={oldPassword}
            setValue={setoldPassword}
            secureTextEntry
          />

          <CustomInput
            placeholder="Enter new password"
            value={newPassword}
            setValue={setNewPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Confirm new password"
            value={repeatnewPassword}
            setValue={setRepeatNewPassword}
            secureTextEntry
          />

          <View style={{ marginTop: 20 }}>
            <CustomButton
              text="Change"
              onPress={onChangePressed}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  topbar: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
});

export default NewPasswordScreen;
