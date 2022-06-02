import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icony from 'react-native-vector-icons/FontAwesome';
import {parseIconFromClassName} from 'react-native-fontawesome';
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
        <View style={[{backgroundColor: '#898990', flex: 1}]}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 20,
              color: '#000000',
              textAlign: 'center',
            }}>
            About Us
          </Text>
        </View>
        <View style={[{backgroundColor: '#898', flex: 1}]}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 18,
              textAlign: 'center',
              color: '#8B8B8B',
            }}>
            OUR FEATURES
          </Text>
        </View>
        <View style={[{backgroundColor: '#990', flex: 1}]}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 15,
              textAlign: 'center',
              color: '#3A4F5F',
            }}>
            IndexCloud is one of the best delivery {'\n'} service providers in
            SriLanka.
          </Text>
        </View>
        <View style={[{backgroundColor: '#898990', flex: 1}]}>
          <View
            style={{
              backgroundColor: '#C5D4E3',
              borderRadius: 20,
            }}></View>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text>
                <Icony name="undo" size={30} color="#900" />
              </Text>
              <View>
                <Text
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 18,
                    color: '#000000',
                    marginTop: 20,
                  }}>
                  FREE RETURNS
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16,
                    color: '#3A4F5F',
                    textAlign: 'justify',
                  }}>
                  We stand behind our services and want you to be satisfied with
                  them.So the Returns are free.
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text style={{marginTop: 50}}>
                <Icony name="truck" size={30} color="#0F8000" />
              </Text>
              <View style={{marginLeft: 40}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 18,
                    color: '#000000',
                    marginTop: 25,
                  }}>
                  LOCAL DELIVERY
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16,
                    color: '#3A4F5F',
                    marginRight: 15,
                    marginTop: 10,
                    textAlign: 'justify',
                  }}>
                  Currently cover all over Srilanka qualify for express
                  deliveries.
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text style={{marginTop: 50}}>
                <Icony name="headphones" size={30} color="#000080" />
              </Text>
              <View style={{marginLeft: 43}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 18,
                    color: '#000000',
                  }}>
                  DEDICATED SERVICE
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16,
                    color: '#3A4F5F',
                    textAlign: 'justify',
                    marginBottom: 45,
                  }}>
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
});

export default About;
