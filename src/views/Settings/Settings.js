import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useLogin} from '../../context/LoginProvider';
import Client from '../../routes/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      await AsyncStorage.getItem('@MyApp_user').then(res => {
        console.log(res);
        setCurrentUser(res != null ? JSON.parse(res) : null);
        getUser(JSON.parse(res).id);
      });
    } catch (e) {
      // console.log(e);
    }
  };

  const getUser = async userId => {
    await Client.get('/profile', {_id: userId})
      .then(response => {
        setUser(response.data);
        // console.log(response);
      })
      .catch(err => {
        console.log('Unable to get profile');
      });
  };

  const navigation = useNavigation();

  const pressedNewPassword = () => {
    navigation.navigate('ChangePassword');
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
  const onbackPressed = () => {
    navigation.navigate('Dashboard');
  };
  const {setIsLoggedIn} = useLogin();

  const Row = ({iconLeft, textName, onPressed}) => {
    return (
      <View style={[styles.sections]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon2 name={iconLeft} size={30} color="#656363" />

          <TouchableOpacity onPress={onPressed}>
            <Text style={styles.subText}> {textName}</Text>
          </TouchableOpacity>
        </View>
        <Icon
          name="keyboard-arrow-right"
          size={30}
          color="#7E7D7D"
          onPress={onPressed}
        />
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View style={styles.root}>
        <View style={styles.TopCont}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: '60%',
            }}>
            <Icon
              name="keyboard-arrow-left"
              size={30}
              color="#7E7D7D"
              onPress={onbackPressed}
            />
            <Text
              style={{
                fontFamily: 'SF-Pro-Display-Medium',
                letterSpacing: 0.5,
                fontSize: 23,
                color: '#000',
                justifyContent: 'center',
              }}>
              Settings
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          {currentUser && (
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
                height: 170,
                width: 170,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: 'white',
              }}
              source={{
                uri: currentUser.photo,
              }}
            />
          )}
        </View>

        <View style={[styles.ProfileCont]}>
          <View style={[styles.settingpanel]}>
            <View style={[styles.settingpanelcol]}>
              <Text style={styles.mainText}>PROFILE</Text>
              <Row
                iconLeft="account-circle"
                textName="View Profile"
                onPressed={pressedProfile}
              />
              <Row
                iconLeft="account-lock-open-outline"
                textName="Change Password"
                onPressed={pressedNewPassword}
              />
              <Row
                iconLeft="shield-lock"
                textName="Privacy Policy"
                onPressed={pressedPrivacyPolicy}
              />
            </View>
          </View>
          <View style={[styles.settingpanel]}>
            <View style={[styles.settingpanelcol]}>
              <Text style={styles.mainText}>SETTINGS</Text>
              <Row
                iconLeft="help-box"
                textName="Help and Support"
                onPressed={pressedHelp}
              />
              <Row
                iconLeft="message-text-lock"
                textName="Terms and Conditions"
                onPressed={pressedTerms}
              />
              <Row
                iconLeft="office-building-marker"
                textName="About"
                onPressed={pressedAbout}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 1.5}}>
          <CustomButton text="LOG OUT" onPress={() => setIsLoggedIn(false)} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  TopCont: {
    flex: 0.5,
    padding: 20,
  },
  mainText: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 2,
    padding: 3,
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'justify',
  },
  ProfileCont: {
    flex: 5,
    padding: 10,
    borderColor: '#F23243',
    lineHeight: 42,
  },
  sections: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderRadius: 2,
    marginBottom: 4,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subText: {
    fontFamily: 'SF-Pro-Display-Regular',
    letterSpacing: 0.5,
    fontSize: 19,
    lineHeight: 42,
    color: '#000000',
    paddingLeft: 15,
  },
  settingpanel: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  settingpanelcol: {
    flex: 0.5,
    width: '100%',
    height: '100%',
  },
  ProfilePicture: {
    width: 180,
    height: 180,
    resizeMode: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: 'white',
  },
  container: {
    flex: 2.5,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Settings;
