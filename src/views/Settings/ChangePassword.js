import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  isValidObjField,
  updateError,
  isValidPassword,
} from './../../utils/methods';
import client from './../../routes/client';
import {useNavigation} from '@react-navigation/native';
import {useLogin} from '../../context/LoginProvider';
const NewPasswordScreen = () => {
  const [userData, setUserData] = useState({
    oldpassword: '',
    newPassword: '',
    repeatnewPassword: '',
  });
  const [error, setError] = useState('');
  const {profile, setProfile} = useLogin();
  const auth = {profile};
  const loginperson = auth.profile.id;

  const {oldpassword, newPassword, repeatnewPassword} = userData;

  const isValidForm = () => {
    // we will accept only if all of the fields have value
    if (!isValidObjField(userData))
      return updateError('Required all fields!', setError);
    // if valid newpassword with 8 or more characters
    if (!isValidPassword(newPassword))
      return updateError(
        'your new password shoud be in 8 to 24 characters.Must include uppercase and lowercase letters, a number and a special character.',
        setError,
      );
    if (!newPassword.trim() || newPassword.length < 8)
      return updateError(
        'Your password should contain atleast 8 charactors',
        setError,
      );
    // password and confirm password must be the same
    if (newPassword != repeatnewPassword)
      return updateError(
        'New entered Password and confirm password do not match!',
        setError,
      );

    if (newPassword === oldpassword)
      return updateError(
        'New entered Password and old password are same...!',
        setError,
      );
    return true;
    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        console.log(loginperson);
        console.log(userData);

        const responce = await client.post('/changepassword', {
          newPassword,
          oldpassword,
          loginperson,
        });
        if (responce.data.success) {
          console.log(responce.data.message);
          setUserData({
            newPassword: '',
            oldpassword: '',
            repeatnewPassword: '',
          });
          return updateError('Your new password is changed.', setError);
        } else {
          return updateError('Enterd Current password is not match', setError);
        }

        console.log(responce.data.message);
        console.log(responce.data.success);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const navigation = useNavigation();

  const onbackPressed = () => {
    setUserData({
      newPassword: '',
      oldpassword: '',
      repeatnewPassword: '',
    });
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
          <Icon
            name="chevron-back"
            size={30}
            color="#9C9C9C"
            onPress={onbackPressed}
          />
        </View>
        <View style={styles.root}>
          <View style={{marginTop: 40}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 29,
                textAlign: 'center',
                color: '#000000',
              }}>
              Change Password
            </Text>

            <Text style={styles.Text1}>
              Please create a new password that you don't use on any other site
            </Text>
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <CustomInput
            placeholder="Enter current password"
            value={oldpassword}
            setValue={value => setUserData({...userData, oldpassword: value})}
            secureTextEntry
          />

          <CustomInput
            placeholder="Enter new password"
            value={newPassword}
            setValue={value => setUserData({...userData, newPassword: value})}
            secureTextEntry
          />
          <CustomInput
            placeholder="Confirm new password"
            value={repeatnewPassword}
            setValue={value =>
              setUserData({...userData, repeatnewPassword: value})
            }
          />

          <View style={{marginTop: 20}}>
            <CustomButton text="Change" onPress={submitForm} />
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
  Text1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'left',
    color: '#656363',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#D2F3C6',
    borderRadius: 9,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  errorText: {
    fontFamily: 'Poppins-Regular',
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#FFDBDB',
    borderRadius: 9,
  },
});

export default NewPasswordScreen;
