import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {List, ListItem} from 'react-native-elements';
import COLORS from '../../components/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../../components/CustomInput';
const Summary = () => {
  const navigation = useNavigation();
  //#C3E4F5
  //#213571
  //#000000
  //#7E7D7D
  const [Items, setItems] = useState([
    {key: 1, item: '001854',address: 'Atchuvely', name: ' '},
    {key: 2, item: '741541',address: 'Atchuvely', name: ' '},
    {key: 3, item: '638524',address: 'Atchuvely', name: ' '},
    {key: 4, item: '096471',address: 'Atchuvely', name: ' '},
    {key: 5, item: '631901',address: 'Atchuvely', name: ' '},
    {key: 6, item: '001854',address: 'Atchuvely', name: ' '},
    {key: 7, item: '741541',address: 'Atchuvely', name: ' '},
  ]);

  const onMenuPressed = () => {
    navigation.navigate('Menu');
  };
  const onSettingsPressed = () => {
    navigation.navigate('Settings');
  };
  const onArrowPressed = () => {
    navigation.navigate('shipmentInfo');
  };


  return (
    <View style={styles.root}>
      <ScrollView>
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
          <View style={[styles.Summary]}>
            <Text style={styles.SummaryTitle}>Out For Delivery</Text>
          </View>
          <View>
            <Text style={styles.ShipementText}>Shipment ID</Text>
          </View>
          <View>
            {Items.map(object => {
              return (
                <View style={styles.item} key={object.key}>
                  <Text style={styles.Itemtext}>{object.item}</Text>
                  <Text style={styles.Itemtext}>{object.address}</Text>
                  <Icon
                    style={styles.Itemtext}
                    name="arrow-forward"
                    size={20}
                    color="#000000"
                    onPress={onArrowPressed}
                  />
                </View>
              );
            })}
          </View>
        </ImageBackground>
      </ScrollView>
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
  Summary: {
    flex: 0.5,
  },
  SummaryTitle: {
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
  ShipementText: {
    marginLeft: 25,
    marginBottom: 14,
    marginTop: 89,
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
  },
  Itemtext: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    color: '#000000',
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 8,
  },
  item: {
    backgroundColor: '#C3E4F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    container: 8,
    marginLeft: 25,
    marginRight: 25,
    height: 38,
    borderColor:'#C3E4F5',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default Summary;
