import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {List, ListItem} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';
const OutForDelivery = () => {
  const navigation = useNavigation();
  //#C3E4F5
  //#213571
  //#000000
  //#7E7D7D

  const onMenuPressed = () => {
    navigation.navigate('Settings');
  };
  const onSettingsPressed = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../../assets/backCrop.png')}
        style={{width: '100%', height: '70%'}}>
        <View style={[styles.topbar]}>
          <Icon
            name="md-menu-sharp"
            size={40}
            color="#000000"
            onPress={onMenuPressed}
          />
          <Icon
            name="settings-sharp"
            size={35}
            color="#000000"
            onPress={onSettingsPressed}
          />
        </View>
        <View style={[styles.OutForDelivery]}>
          <Text style={styles.OutForDeliveryTitle}>Out For Delivery</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  topbar: {
    flex: 0.2,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
  welcomeBar: {
    flex: 0.5,
    paddingLeft: 20,
    paddingBottom: 15,
  },
  welcome: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#2566AD',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 26,
    color: '#000000',
  },
  OutForDelivery: {
    flex: 0.5,
  },
  OutForDeliveryTitle: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default OutForDelivery;
