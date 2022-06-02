import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icony from 'react-native-vector-icons/FontAwesome';

import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();

  const onbackPressed = () => {
    navigation.navigate('Settings');
  };

  const parsedIcon = parseIconFromClassName('fab fa-truck');
  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <View style={[{backgroundColor: '#869899', flex: 1}]}>
        <View style={[{backgroundColor: '#869899', flex: 1}]}>
          <Icon
            name="chevron-back"
            size={30}
            color="#000"
            onPress={onbackPressed}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 20,
            color: '#000000',
            textAlign: 'left',
            marginLeft: 60,
            marginTop: -32,
          }}>
          About Us{' '}
        </Text>

        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 18,
            textAlign: 'center',
            color: '#8B8B8B',
            paddingTop: 10,
          }}>
          OUR FEATURES
        </Text>

        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 15,
            textAlign: 'center',
            color: '#3A4F5F',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
          }}>
          IndexCloud is one of the best delivery {'\n'} service providers in
          SriLanka.
        </Text>

        <View
          style={{
            backgroundColor: '#C5D4E3',
            marginLeft: 25,
            marginTop: 30,
            marginRight: 25,
            borderRadius: 20,
            padding: 20,
            paddingTop: 10,
          }}>
          <View>
            <View style={styles.service}>
              <Text style={{marginTop: 60}}>
                <Icony name="undo" size={30} color="#900" />
              </Text>
              <View style={{marginLeft: 44}}>
                <Text style={styles.Features}>FREE RETURNS</Text>
                <Text style={styles.content}>
                  We stand behind our services and want you to be satisfied with
                  them.So the Returns are free.
                </Text>
              </View>
            </View>

            <View style={styles.service}>
              <Text style={{marginTop: 50}}>
                <Icony name="truck" size={30} color="#0F8000" />
              </Text>
              <View style={{marginLeft: 40}}>
                <Text style={styles.Features}>LOCAL DELIVERY</Text>
                <Text style={styles.content}>
                  Currently cover all over Srilanka qualify for express
                  deliveries.
                </Text>
              </View>
            </View>
            <View style={styles.service}>
              <Text style={{marginTop: 50}}>
                <Icony name="headphones" size={30} color="#000080" />
              </Text>
              <View style={{marginLeft: 43, marginBottom: 45}}>
                <Text style={styles.Features}>DEDICATED SERVICE</Text>
                <Text style={styles.content}>
                  Consult our specialists for help with a Delivery
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    display: 'flex',
    flex: 1,
  },

  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginLeft: 25,
    justifyContent: 'center',
    borderRadius: 4,
  },

  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: 'black',
  },

  topbar: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },

  Features: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#000000',
    marginTop: 20,
  },

  content: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#3A4F5F',
    marginRight: 15,
    marginTop: 10,
    textAlign: 'justify',
  },

  service: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default About;
