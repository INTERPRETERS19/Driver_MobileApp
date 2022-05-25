import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
const Settings = () => {
  const navigation = useNavigation();


  const onLogoutPressed = () => {
    navigation.navigate('SignIn');
  };
  const pressedNewPassword = () => {
    navigation.navigate('ChangedPassword');
  };
  const pressedAbout = () => {
    navigation.navigate('About');
  };
  const pressedPrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };
  const pressedHelp = () => {
    navigation.navigate('Help');
  };
  const pressedTerms = () => {
    navigation.navigate('Terms');
  };
  const pressedProfile = () => {
    navigation.navigate('Profile');
  };

  return (

    <View style={styles.root}>

      <ImageBackground
        source={require('../../../assets/img1.jpg')}
        style={{
          width: '100%',
          height: '100%'
        }}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.ProfilePicture}
              source={require('../../../assets/profile.jpg')}
            />
          </View>
          <View style={[styles.settingpanel]} >
            <View style={[styles.settingpanelcol]}>
              <Text style={styles.mainText}>Profile</Text>
              <TouchableOpacity onPress={pressedProfile}>
                <Text style={styles.subText}> View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={pressedNewPassword}>
                <Text style={styles.subText}> Change Password</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={pressedPrivacyPolicy}>
                <Text style={styles.subText}> Privacy Policy</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.settingpanelcol]} >
              <Text style={styles.mainText}>Settings</Text>
              <TouchableOpacity onPress={pressedHelp}>
                <Text style={styles.subText}> Help and Support</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={pressedTerms}>
                <Text style={styles.subText}> Terms of Service</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={pressedAbout}>
                <Text style={styles.subText}> About</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <CustomButton text="LOG OUT" onPress={onLogoutPressed} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>

  );
};



const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mainText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'justify',
    paddingLeft: 50,
  },
  subText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    lineHeight: 40,
    color: '#000000',
    textAlign: 'justify',
    paddingLeft: 65,
  },
  settingpanel: {
    flex: 4,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingRight: 30,
    paddingTop: 10,
  },
  settingpanelcol: {
    paddingTop: 40,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  ProfilePicture: {
    width: 180,
    height: 180,
    resizeMode: "center",
  },
  container: {
    paddingLeft: 90,
    paddingTop: 40,
    paddingBottom: 0,
    borderRadius: 180 / 2,
    flexWrap: 'wrap',
    alignItems: 'center',
  },

});

export default Settings;