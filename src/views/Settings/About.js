import React, { useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icony from 'react-native-vector-icons/FontAwesome';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
} from 'react-native-fontawesome';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const About = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onbackPressed = () => {
    navigation.navigate('Settings');
  };

  const parsedIcon = parseIconFromClassName('fab fa-truck');
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


        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#000000', textAlign: 'center', paddingTop: 10, }}>About Us </Text>


        <Text style={{
          fontFamily: 'Roboto-Bold', fontSize: 18, textAlign: "center", color: '#8B8B8B', paddingTop: 10,
        }}>
          OUR FEATURES
        </Text>

        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 15, textAlign: "center", color: '#3A4F5F', marginLeft: 10, marginRight: 10, marginTop: 20 }}>
          IndexCloud is one of the best delivery {'\n'} service providers in SriLanka.

        </Text>

        <View style={{
          backgroundColor: '#C5D4E3', marginLeft: 25, marginTop: 30,
          marginRight: 25,
          borderRadius: 20,
          padding: 20,
          paddingTop: 10,

        }}>
          <View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginTop: 25 }}>
              <Text style={{ marginTop: 65 }}>
                <Icony name="undo" size={30} color="#900" />
              </Text>
              <View style={{ marginLeft: 45 }}>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 18, color: '#000000', marginTop: 20 }}>
                  FREE RETURNS
                </Text>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#3A4F5F', marginRight: 15, marginTop: 10, textAlign: 'justify' }}>
                  We stand behind our services and want you to be satisfied with them.So the Returns are free.
                </Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ marginTop: 50 }}>
                <Icony name="truck" size={30} color="#0F8000" />
              </Text>
              <View style={{ marginLeft: 40 }}>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 18, color: '#000000', marginTop: 25 }}>
                  LOCAL DELIVERY
                </Text>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#3A4F5F', marginRight: 15, marginTop: 10, textAlign: 'justify' }}>
                  Currently cover all over Srilanka qualify for express deliveries.
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', }}>
              <Text style={{ marginTop: 50 }}>
                <Icony name="headphones" size={30} color="#000080" />
              </Text>
              <View style={{ marginLeft: 43 }}>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 18, color: '#000000', marginTop: 25 }}>
                  DEDICATED SERVICE
                </Text>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#3A4F5F', marginRight: 15, marginTop: 10, textAlign: 'justify', marginBottom: 45 }}>
                  Consult our specialists for help with a Delivery
                </Text>
              </View>
            </View>
          </View>

        </View>

      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    display: "flex",
    flex: 1
  },

  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    marginLeft: 25,
    justifyContent: "center",
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

    paddingTop: 50
  },
});

export default About;