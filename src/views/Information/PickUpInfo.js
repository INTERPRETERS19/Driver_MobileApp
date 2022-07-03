import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import client from '../../routes/client';
import {
  isValidObjField,
  updateError,
  isValidPassword,
} from '../../utils/methods';

const PickUpInfo = ({route}) => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState();

  const {
    shipmentId,
    contact,
    deliveryFee,
    name,
    street,
    city,
    district,
    status,
  } = route.params;
  const [isSelected, setSelection] = useState(false);
  const [error, setError] = useState();

  const isFinished = selectedValue => {
    if (selectedValue == 'PickedUp' && !isSelected) {
      console.log('hellllllooooo!!!');
      return updateError('Please confirm delivery fee received!', setError);
    }

    return true;
  };

  const onDonePressed = async () => {
    console.log(selectedValue);

    console.log(shipmentId);
    console.log(text);

    if (isFinished(selectedValue, deliveryFee)) {
      try {
        const res = await client.post('/updatestatus', {
          shipmentId,
          selectedValue,
          text: null,
          deliveredDate: null,
        });
        if (res.data.success) {
          setSelectedValue('PickUp');
          onChangeText('');
          setSelection(false);
          navigation.navigate('PickUp');
        } else {
          return updateError('cannot find Shipment', setError);
        }
      } catch (error) {
        return updateError('Something went wrong!!!', setError);
      }
    }
  };
  // const onbackPressed = () => {
  //     navigation.navigate('OutForDelivery');
  // };
  const [selectedValue, setSelectedValue] = useState('PickUp');
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
            {/* <View style={styles.topbarin1}>
            <Icon
              name="keyboard-arrow-left"
              size={35}
              color="rgba(0, 0, 0, 0.40)"
              onPress={onbackPressed}
            />
          </View> */}
            {/* <View style={styles.topbarin2}>
            <Text style={{fontSize: 22}}>Info</Text>
          </View> */}
          </View>
        </View>
        <ScrollView>
          <View style={styles.contentfull}>
            <View style={styles.content}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text style={styles.head}>Shipment ID</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.head}>{shipmentId}</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoIn}>Shipper</Text>
                <Text style={styles.form}>{name}</Text>
                <Text style={styles.infoIn}>Contact number</Text>
                <Text style={styles.form}>{contact}</Text>
                <Text style={styles.infoIn}>Street</Text>
                <Text style={styles.form}>{street}</Text>
                <Text style={styles.infoIn}>City</Text>
                <Text style={styles.form}>{city}</Text>
                <Text style={styles.infoIn}>District</Text>
                <Text style={styles.form}>{district}</Text>
                {/* <Text style={styles.infoIn}>COD amount</Text> */}
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Text style={styles.infoIn}>Delivery Fee</Text>
                  </View>
                  <View style={{flex: 1, marginLeft: 100}}>
                    {!(deliveryFee === 0) && (
                      <>
                        <CheckBox
                          value={isSelected}
                          onValueChange={setSelection}
                        />
                      </>
                    )}
                  </View>
                </View>
                <Text style={styles.form}>{deliveryFee}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
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
                      <Picker.Item label="Pickup" value="PickUp" />
                      <Picker.Item label="Pickedup" value="PickedUp" />
                    </Picker>
                  </View>
                </View>
              </View>

              <View>
                {error ? (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {error}
                  </Text>
                ) : null}
              </View>
              <View style={styles.button}>
                <CustomButton text="Done" onPress={onDonePressed} />
              </View>
            </View>
          </View>
        </ScrollView>
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
    //paddingTop: 10,
    //alignItems: 'center',
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
export default PickUpInfo;
