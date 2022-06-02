import React, { useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onbackPressed = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <ImageBackground
      source={require('../../../assets/Background.png')}
      style={{
        flex: 1,

        height: '100%',
        width: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View style={styles.TopCont}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: '50%',
              }}>
              <Icon
                name="chevron-back"
                size={30}
                color="#FFFFFF"
                onPress={onbackPressed}
              />
              <Text
                style={{
                  fontFamily: 'SF-Pro-Display-Medium',
                  letterSpacing: 0.5,
                  fontSize: 23,
                  color: '#FFFFFF',
                  justifyContent: 'center',
                }}>
                Your Profile
              </Text>
            </View>
          </View>

          <View style={styles.container}>
            <Image
              style={{
                display: 'flex',
                flex: 0.8,
                resizeMode: 'contain',
                height: 160,
                width: 160,
                borderRadius: 100,
                overflow: 'hidden',
                borderWidth: 3,
                borderColor: 'white',
              }}
              source={require('../../../assets/profile.jpg')}
            />
          </View>

          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 17,
            }}>
            <Text style={styles.Label}>FULL NAME</Text>
            <Text style={styles.Info}>Eren Jeager</Text>

            <Text style={styles.Label}>MOBILE NUMBER</Text>
            <Text style={styles.Info}>0761234567</Text>
            <Text style={styles.Label}>DRIVING LICENCE NUMBER</Text>
            <Text style={styles.Info}>B1234567</Text>
            <Text style={styles.Label}>VEHICLE TYPE</Text>
            <Text style={styles.Info}>Motor Bike</Text>
            <Text style={styles.Label}>VEHICLE REGISTRATION NUMBER</Text>
            <Text style={styles.Info}>4554654345</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  TopCont: {
    padding: 20,
  },
  container: {
    display: 'flex',
    flex: 1,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
  },

  Label: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#C2C2C2',
    marginLeft: 15,
    marginTop: 14,
  },
  Info: {
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#000000',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 14,
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.2,
  },
});

export default Profile;
