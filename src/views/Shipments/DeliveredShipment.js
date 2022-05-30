import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon2 from 'react-native-vector-icons/AntDesign';
import Profilecomponent from '../../components/Profilecomponent';
const DeliveredShipment = () => {
  const navigation = useNavigation();
  //#C3E4F5
  //#213571
  //#000000
  //#7E7D7D
  const [Items, setItems] = useState([
    { key: 1, item: '001854', time: '12.30 pm', name: ' ' },
    { key: 2, item: '741541', time: '1.00 pm', name: ' ' },
    { key: 3, item: '638524', time: '9.00 am', name: ' ' },
    { key: 4, item: '096471', time: '10.30 am', name: ' ' },
    { key: 5, item: '631901', time: '9.35 am', name: ' ' },
    { key: 6, item: '001854', time: '3.15 pm', name: ' ' },
    { key: 7, item: '741541', time: '7.05 pm', name: ' ' },
  ]);


  const onArrowPressed = () => {
    navigation.navigate('ShipmentInfo');
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../../assets/img1.jpg')}
        style={{ width: '100%', height: '100%' }}>
        <ScrollView>

          <View style={[styles.Out]}>
            <Profilecomponent></Profilecomponent>
            <View style={[styles.DeliveredShipment]}>
              <Text style={[styles.DeliveredShipmentText]}>
                Delivered Shipment
              </Text>
            </View>

            <View style={styles.ShipmentSection}>
              <View style={styles.ShipementText}>
                <Text>Shipment ID</Text>
              </View>
              <View>
                {Items.map(object => {
                  return (
                    <View style={styles.item} key={object.key}>
                      <Text style={styles.Itemtext}>{object.item}</Text>
                      <Text style={styles.Itemtext}>{object.time}</Text>
                      <Icon2
                        style={styles.Itemtext}
                        name="right"
                        size={20}
                        color="#000000"
                        onPress={onArrowPressed}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: '#236501',
  },
  Out: {
    flex: 10,
    fontWeight: 'bold',
    fontSize: 25,
    justifyContent: 'space-between',
    fontFamily: 'Montserrat-Medium',
  },
  DeliveredShipment: {
    flex: 1,
    padding: 15,
    color: '#000000',
    lineHeight: 22,
    letterSpacing: 4,
    textTransform: 'uppercase',
    justifyContent: 'space-between',
  },
  DeliveredShipmentText: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  ShipmentSection: {
    flex: 4,
    //backgroundColor: '#A45163',
    padding: 20,
    // paddingTop: 120,
  },
  ShipementText: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    flex: 10,
  },
  Itemtext: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    color: '#000000',
    textAlign: 'left',
  },
  item: {
    // backgroundColor:'#006531',
    backgroundColor: '#C3E4F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#C3E4F5',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
  },
});

export default DeliveredShipment;
DeliveredShipment;
