import React, {useState} from 'react';
import {Image} from 'react-native';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import COLORS from '../../components/colors';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Forgot = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onBacktoAccountPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        flex: 1,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            style={{
              flex: 1,
              resizeMode: 'contain',
              marginTop: 140,
              height: 230,
            }}
            source={require('../../../assets/successimg.png')}
          />
        </View>

        <View style={styles.Box}>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 18,
                textAlign: 'center',
                color: '#656363',
                marginLeft: 10,
                marginRight: 10
              }}>
              Please Contact Your Service Provider To Reset Your Password !!!
              
            </Text>
          </View>

          <View style={{marginTop: 60}}>
            <CustomButton
              text="Back to Sign In"
              onPress={onBacktoAccountPressed}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginLeft: 25,
    justifyContent: 'center',
    borderRadius: 4,
  },

  Box: {
    backgroundColor: '#ffffff',
    marginLeft: 15,
    marginTop: 35,
    marginRight: 15,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
});

export default Forgot;
