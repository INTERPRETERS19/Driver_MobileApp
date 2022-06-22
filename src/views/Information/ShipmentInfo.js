import React, { useState, useEffect } from 'react';
//import Icon from 'react-native-vector-icons/Ionicons';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
//import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../components/CustomButton';
import Dropdown from './Dropdown';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

const ShipmentInfo = () => {
  const navigation = useNavigation();
  //const [COD] = useState('');
  const SHIPPER_ID = "62b0b975ea359dca05630008";
  const [shipmentInfo, setShipmentInfo] = useState(
    {
      data: {
        id: "",
        recipient_name: "",
        mobile_phone_number: "",
        r_district: "",
        r_city: "",
        COD: "",
        current_status: ""
      }
    }
  );
  useEffect(() => {
    getUser(SHIPPER_ID);
  }, []);

  const getUser = async userId => {
    await Client.get('/shipmentinfo', { _id: SHIPPER_ID })
      .then(response => {
        setShipmentInfo(response);
        console.log(response.data);
      })
      .catch(err => {
        console.log('Unable to get information');
      });
  };
  const [isSelected, setSelection] = useState(false);
  
  const onDonePressed = () => {
    navigation.navigate('OutForDelivery');
  };
  const onbackPressed = () => {
    navigation.navigate('OutForDelivery');
  };
  const [selectedValue, setSelectedValue] = useState('Out for delivery');

  return (
    <View style={styles.body}>
      <ImageBackground
        source={require('../../../assets/img1.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={styles.topbar}>
          <View style={styles.topbarin}>
            <View style={styles.topbarin1}>
              <Icon
                name="keyboard-arrow-left"
                size={35}
                color="rgba(0, 0, 0, 0.40)"
                onPress={onbackPressed}
              />
            </View>
            <View style={styles.topbarin2}>
              <Text style={{ fontSize: 22 }}>Info</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentfull}>
          <View style={styles.content}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.head}>Shipment ID</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.head}>{shipmentInfo.data.id}</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoIn}>Recepient</Text>
              <Text style={styles.form}>{shipmentInfo.data.recipient_name}</Text>
              <Text style={styles.infoIn}>Contact number</Text>
              <Text style={styles.form}>{shipmentInfo.data.mobile_phone_number}</Text>
              <Text style={styles.infoIn}>District</Text>
              <Text style={styles.form}>{shipmentInfo.data.r_district}</Text>
              <Text style={styles.infoIn}>City</Text>
              <Text style={styles.form}>{shipmentInfo.data.r_city}</Text>
              <Text style={styles.infoIn}>COD amount</Text>

              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.form}>{shipmentInfo.data.COD}</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 3 }}>
                    <Text style={styles.form}>1000</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <CheckBox
                      value={isSelected}
                      onValueChange={setSelection}
                      style={styles.checkbox}
                    />
                  </View>
                </View>

                <Text style={styles.infoIn}>Status</Text>

                {/* <Dropdown></Dropdown> */}
                <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue}
                    style={{
                      display: 'flex',
                      height: 50,
                      width: 200,
                      // marginTop: 500,
                      alignSelf: 'center',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }>
                    <Picker.Item label="Rescheduled" value="Rescheduled" />
                    <Picker.Item label="Failed to Deliver" value="Failed to Deliver" />
                    <Picker.Item label="Delivered" value="Delivered" />
                    <Picker.Item label="Out for delivery" value="Out for delivery" />
                  </Picker>
                </View>
              </View>
            </View>
            <View style={styles.button}>
              <CustomButton text="Done" onPress={onDonePressed} />
            </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    // padding: 20,
  },
  content: {
    padding: 20,
    flex: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
  },
  head: {
    flex: 1,
    paddingTop: 10,
    //paddingBottom: 10,
    alignItems: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  info: {
    flex: 7,
    padding: 10,
    // backgroundColor: '#faaaaa',
  },
  button: {
    flex: 1,
    //backgroundColor:"#213154",
    padding: 30,
  },
  infoIn: {
    fontSize: 18,
  },
  form: {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 18,
  },
  checkbox: {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    alignSelf: 'center',
  },
  topbarin: {
    flex: 1,
    flexDirection: 'row',
  },
  topbarin1: {
    flex: 1,
  },
  topbarin2: {
    flex: 7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
  },
});
export default ShipmentInfo;