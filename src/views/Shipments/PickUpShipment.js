import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import client from '../../routes/client';
import {useState} from 'react';
import Profilecomponent from '../../components/Profilecomponent';
import BottomNavigationBar from '../../shared/BottomNavigationBar';
import {useLogin} from '../../context/LoginProvider';
import {useNavigation} from '@react-navigation/native';
const PickUp = () => {
  const navigation = useNavigation();
  const [Items, setItems] = useState();
  const [shipper, setShipper] = useState();
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const searchFilter = text => {
    if (text) {
      const newData = filterData.filter(item => {
        const itemData = item.id ? item.id : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(Items);
      setSearch(text);
    }
  };
  const {profile, setProfile} = useLogin();
  const auth = {profile};
  const loginperson = auth.profile.id;

  const getItems = async () => {
    try {
      const res = await client.get(
        `http://10.0.2.2:8000/pickup/${loginperson}`,
      );
      if (res.data.success) {
        setItems(res.data.data);
        setFilterData(res.data.data);
        setLoading(false);
        console.log('Success');
        console.log(res.data.data);
        // getShipper(res.data.data.shipper_details);
      } else {
        console.log('Failed');
        console.log(Items);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  const getShipper = async shipperId => {
    try {
      const res = await client.get(
        `http://10.0.2.2:8000/shipperdetail`,

        {id: shipperId},
      );
      console.log(res.data);
      if (res.data.success) {
        setShipper(res.data.data);
        setLoading(false);
        console.log('Success');
      } else {
        console.log('Failed');
        console.log(Items);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getShipper();
  // }, []);

  const Item = ({
    id,
    r_no_street,
    r_city,
    current_status,
    recipient_name,
    r_district,
    mobile_phone_number,
    COD,
    delivery_fee,
    firstName,
    //shipper_details,
  }) => (
    <View style={styles.item}>
      <Text
        style={styles.Itemtext}
        onPress={() =>
          navigation.navigate('PickUpInfo', {
            shipmentId: id,
            name: firstName,
            street: r_no_street,
            city: r_city,
            district: r_district,
            status: current_status,
            contact: mobile_phone_number,
            deliveryFee: delivery_fee,
            //shipperdetails: shipper_details,
          })
        }>
        {id}
      </Text>
      <Text style={styles.Itemtamount}>{r_no_street}</Text>
      <Text style={styles.Itemtamount}>{r_city}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      id={item.id}
      firstName={item.shipper_details.firstName}
      r_no_street={item.shipper_details.street}
      r_city={item.shipper_details.city}
      current_status={item.current_status}
      r_district={item.r_district}
      mobile_phone_number={item.shipper_details.mobile_no}
      delivery_fee={item.delivery_fee}
      recipient_name={item.recipient_name}
      shipper_details={item.shipper_details}
    />
  );

  const onArrowPressed = () => {
    navigation.navigate('ShipmentInfo');
  };
  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        flex: 1,
        height: '100%',
      }}>
      <View style={styles.root}>
        <Profilecomponent></Profilecomponent>
        <Text style={styles.PickUpTitle}>Pick Up </Text>
        <View style={styles.PickUp}></View>
        <View>
          <TextInput
            style={styles.search}
            value={search}
            placeholder="Search"
            underlineColorAndroid="transparent"
            onChangeText={text => searchFilter(text)}
          />
        </View>
        <View style={styles.PickUpSection}>
          <View style={styles.ShipementTextcont}>
            <Text style={styles.ShipementText}> Shipment ID</Text>
            <Text style={styles.ShipementText}>Street No</Text>
            <Text style={styles.ShipementText2}>Address</Text>
          </View>
          <View>
            <FlatList
              data={filterData}
              renderItem={renderItem}
              keyExtractor={item => item._id}
              onRefresh={() => getItems()}
              refreshing={loading}
            />
          </View>
        </View>
        <BottomNavigationBar />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  PickUpTitle: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 5,
    flex: 1,
  },
  PickUp: {
    flex: 4,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 5,
  },
  infoPanelCol: {
    alignContent: 'center',
    backgroundColor: '#213571',
    borderRadius: 10,
    padding: 10,
    width: 300,
    height: 80,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text1: {
    color: '#fff',
    fontFamily: 'SF-Pro-Displa-Bold',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  text2: {
    color: '#fff',
    fontFamily: 'SF-Pro-Displa-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  PickUpSection: {
    flex: 21,
    padding: 20,
  },

  ShipementText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
  },
  ShipementText2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'right',
  },
  ShipementTextcont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  Itemtext: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    color: '#000000',
  },
  Itemtamount: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    color: '#000000',
    textAlign: 'right',
  },
  item: {
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
  search: {
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 20,
    margin: 10,
    borderColor: '#0096',
    backgroundColor: '#fff',
  },
});
export default PickUp;
