import React, {Component} from 'react';
//import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground, StyleSheet, Text, View, Button} from 'react-native';
//import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { Picker } from '@react-native-picker/picker';

const ShipmentInfo = () => {
  const navigation = useNavigation();
  const onDonePressed = () => {
    navigation.navigate('Dashboard');
  };
  const onbackPressed = () => {
    navigation.navigate('OutForDelivery');
  };

  return (
    <View style={styles.body}>
      <ImageBackground
        source={require('../../../assets/img1.jpg')}
        style={{
          flex: 1,
          height: '100%',
        }}>
        <View style={styles.topbar}>
          <View style={styles.topbarin}>
            <View style={styles.topbarin1}>
              <Icon name="keyboard-arrow-left" size={35} color='rgba(0, 0, 0, 0.8)' onPress={onbackPressed} />
            </View>
            <Text style={styles.topbarin2}>Info</Text>
          </View>
        </View>
        <View style={styles.contentfull}>
          <View style={styles.content}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={styles.head}>Shipment ID</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.head}>XXXXXX</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoIn}>Recepient</Text>
              <Text style={styles.form}>William Turner</Text>
              <Text style={styles.infoIn}>Contact number</Text>
              <Text style={styles.form}>0761234567</Text>
              <Text style={styles.infoIn}>District</Text>
              <Text style={styles.form}>Colombo</Text>
              <Text style={styles.infoIn}>City</Text>
              <Text style={styles.form}>Moratuwa</Text>
              <Text style={styles.infoIn}>COD amount</Text>
              <Text style={styles.form}>1000</Text>
              <Text style={styles.infoIn}>Status</Text>
              <Text style={styles.form}>OutforDelivery</Text>
            </View>
          </View>
          <View style={styles.button}>
            <CustomButton text="Done" onPress={onDonePressed} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentfull: {
    flex: 15,
  },
  topbar: {
    flex: 1,
    padding: 20,
  },
  content: {
    padding: 20,
    flex: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
  },
  head: {
    flex: 1,
    paddingTop: 0,
    //paddingBottom: 10,
    alignItems: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    textAlign: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#000',
  },
  info: {
    flex: 7,
    padding: 10,

  },
  button: {
    flex: 1,
    //backgroundColor:"#213154",
    padding: 30,
  },
  infoIn: {
    fontSize: 18,
    color: '#000',
  },
  form: {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 18,
    color: '#000',
  },
  topbarin: {
    flex: 1,
    flexDirection: "row",
  },
  topbarin1: {
    flex: 1,
  },
  topbarin2: {
    flex: 7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Roboto-Bold',
    fontSize: 26,
    color: '#000',
  },
});
export default ShipmentInfo;
