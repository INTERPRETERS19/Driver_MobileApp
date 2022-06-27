import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
//import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../components/CustomButton';
import Dropdown from './Dropdown';
=======
import { ScrollView, ImageBackground, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CustomButton from '../../components/CustomButton';
>>>>>>> 43505d78dd9308505b665dc6fd701a9aef9e2d18
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
<<<<<<< HEAD

const ShipmentInfo = ({route}) => {
  const navigation = useNavigation();

  const { shipmentId,contact,cod,name,city,district}= route.params;



  const onDonePressed = () => {
    navigation.navigate('OutForDelivery');
  };
  const onbackPressed = () => {
    navigation.navigate('OutForDelivery');
  };
  const [selectedValue, setSelectedValue] = useState('Out for delivery');
=======
import client from './../../routes/client';
import {
  isValidObjField,
  updateError,
  isValidPassword,
} from './../../utils/methods';

const ShipmentInfo = ({ route }) => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState();
  const { shipmentId, contact, cod, name, city, district, status } = route.params;
  const [isSelected, setSelection] = useState(false);
  const [error, setError] = useState();



  const onDonePressed = async () => {
    // if(text===""){
    //   onChangeText("Not applicable");
    // }
    // if((text==="Not applicable")&&(!(selectedValue == "Delivered")||!(selectedValue == "OutForDelivery"))){
    //   //popup???
    // console.log("reason??");
    // setSelection(true);
    // }
    console.log(selectedValue);
    //console.log((isSelected&&!(cod==0)));
    console.log(shipmentId);
    console.log(text);
    if (((selectedValue == "Delivered") && isSelected)||
    ((selectedValue == "OutForDelivery") && !isSelected&&(text===""))||
    (!((selectedValue == "Delivered")||(selectedValue == "OutForDelivery")) &&!(text===""))&&!isSelected||
    (((selectedValue == "Delivered")||(selectedValue == "OutForDelivery")) && (cod==0))&& !isSelected)
    {
      const res = await client.post("/updatestatus", {
        shipmentId,
        selectedValue,
        text
      });
      if (res.data.success) {

        setSelectedValue("OutForDelivery");
        onChangeText("");
        setSelection(false);
        navigation.navigate('OutForDelivery');
      }
    }else{
      if((text==="")&&(!(selectedValue == "Delivered")&&!(selectedValue == "OutForDelivery"))){
        //popup???
      console.log("reason??");

      }else{
        //popup???
        console.log("collect cod");
      }
      
    }
  };
  const onbackPressed = () => {

    navigation.navigate('OutForDelivery');
  };
  const [selectedValue, setSelectedValue] = useState('OutForDelivery');
>>>>>>> 43505d78dd9308505b665dc6fd701a9aef9e2d18

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
<<<<<<< HEAD
        <View style={styles.contentfull}>
          <View style={styles.content}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.head}>Shipment ID</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.head}>{shipmentId}</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoIn}>Recepient</Text>
              <Text style={styles.form}>{name}</Text>
              <Text style={styles.infoIn}>Contact number</Text>
              <Text style={styles.form}>{contact}</Text>
              <Text style={styles.infoIn}>District</Text>
              <Text style={styles.form}>{district}</Text>
              <Text style={styles.infoIn}>City</Text>
              <Text style={styles.form}>{city}</Text>
              <Text style={styles.infoIn}>COD amount</Text>
              <Text style={styles.form}>{cod}</Text>

              <View style={{ flex: 1, flexDirection: 'row' }}>
           

                <Text style={styles.infoIn}>Status</Text>

                {/* <Dropdown></Dropdown> */}
                <View style={styles.container}>
                  <Picker
                    selectedValue={selectedValue}
                    style={{
                      display: 'flex',
                      height: 20,
                      width: 200,
                       marginTop: 18,
                       backgroundColor: 'rgba(0, 0, 0, 0.02)',
                      //alignSelf: 'center',
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
=======
        <ScrollView>
          <View style={styles.contentfull}>
            <View style={styles.content}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.head}>Shipment ID</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.head}>{shipmentId}</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoIn}>Recepient</Text>
                <Text style={styles.form}>{name}</Text>
                <Text style={styles.infoIn}>Contact number</Text>
                <Text style={styles.form}>{contact}</Text>
                <Text style={styles.infoIn}>District</Text>
                <Text style={styles.form}>{district}</Text>
                <Text style={styles.infoIn}>City</Text>
                <Text style={styles.form}>{city}</Text>
                {/* <Text style={styles.infoIn}>COD amount</Text> */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.infoIn}>COD amount</Text>
                  </View>
                  <View style={{ flex: 1, marginLeft: 100 }}>
                    {!(cod === 0) && (
                      <>
                        <CheckBox
                          value={isSelected}
                          onValueChange={setSelection}

                        />
                      </>

                    )}
                  </View>
                </View>
                <Text style={styles.form}>{cod}</Text>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={styles.infoIn}>Status</Text>
                  <View style={styles.container}>
                    <Picker
                      selectedValue={selectedValue}
                      style={{
                        display: 'flex',
                        height: 20,
                        width: 200,
                        marginTop: 18,
                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                        //alignSelf: 'center',
                      }}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                      }>
                      <Picker.Item label="Rescheduled" value="Rescheduled" />
                      <Picker.Item label="Failed to Deliver" value="FailToDeliver" />
                      <Picker.Item label="Delivered" value="Delivered" />
                      <Picker.Item label="Out for delivery" value="OutForDelivery" />
                    </Picker>

                  </View>
                </View>
              </View>
              <View>
                {!(selectedValue == "Delivered") && !(selectedValue == "OutForDelivery") && (
                  <>
                    <TextInput
                      multiline
                      //numberOfLines={4}
                      onChangeText={onChangeText}
                      value={text}
                      placeholder="State the reason"
                      style={{
                        padding: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.07)',
                        marginTop: 30, fontFamily: 'Roboto-Regular',
                        fontSize: 18,
                      }}

                    />
                  </>

                )}

              </View>
              <View style={styles.button}>
                <CustomButton text="Done" onPress={onDonePressed} />
              </View>
            </View>
          </View>
        </ScrollView>
>>>>>>> 43505d78dd9308505b665dc6fd701a9aef9e2d18
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
    flex: 0.4,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
<<<<<<< HEAD
    paddingTop: 10,
    alignItems: 'center',
=======
    //paddingTop: 10,
    //alignItems: 'center',
>>>>>>> 43505d78dd9308505b665dc6fd701a9aef9e2d18
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    //textAlign: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 10,
  },
  info: {
    flex: 7,
    padding: 10,
  },
  button: {
    flex: 1,
    padding: 30,
  },
  infoIn: {
    fontSize: 18,
    fontWeight: 'bold',
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