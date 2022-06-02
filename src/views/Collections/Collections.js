import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import Profilecomponent from '../../components/Profilecomponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNavigationBar from '../../shared/BottomNavigationBar';


const Collection = () => {
  const [Items, setItems] = useState([
    {key: 1, item: '001854', amount: '2300', name: ' '},
    {key: 2, item: '741541', amount: '300', name: ' '},
    {key: 3, item: '638524', amount: '5000', name: ' '},
    {key: 4, item: '096471', amount: '2210', name: ' '},
    {key: 5, item: '631901', amount: '650', name: ' '},
    {key: 6, item: '001854', amount: '1320', name: ' '},
    {key: 7, item: '741541', amount: '680', name: ' '},
    {key: 7, item: '741541', amount: '680', name: ' '},
    {key: 7, item: '741541', amount: '680', name: ' '},
    {key: 7, item: '741541', amount: '680', name: ' '},
  ]);

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        flex: 1,
        height: '100%',
      }}>
      <View style={styles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Profilecomponent></Profilecomponent>
          <Text style={styles.CollectionTitle}>Collections </Text>
          <View style={styles.Collection}>
            <View style={styles.infoPanel}>
              <View style={styles.infoPanelCol}>
                <Text style={styles.text2}>Total Collections </Text>
                <MaterialCommunityIcons
                  name="cash-marker"
                  color={'#000000'}
                  size={60}
                />
                <Text style={styles.text1}>37890 </Text>
              </View>
            </View>
          </View>
          <View style={styles.collectionSection}>
            <View style={styles.ShipementTextcont}>
              <Text style={styles.ShipementText}>Shipment ID</Text>
              <Text style={styles.ShipementText2}>COD Amount</Text>
            </View>
            <View>
              {Items.map(object => {
                return (
                  <View style={styles.item} key={object.key}>
                    <Text style={styles.Itemtext}>{object.item}</Text>
                    <Text style={styles.Itemtamount}>{object.amount}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  CollectionTitle: {
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
    backgroundColor: '#DD1',
  },
  Collection: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D1D1',
  },
  infoPanelCol: {
    flex: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#D1D1D1',
    borderRadius: 10,
    padding: 10,
  },
  text1: {
    color: '#082041',
    fontFamily: 'SF-Pro-Displa-Bold',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'left',
    padding: 10,
  },
  text2: {
    color: '#000000',
    fontFamily: 'SF-Pro-Displa-Bold',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'left',
    padding: 10,
    paddingRight: 30,
  },
  collectionSection: {
    flex: 1,
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
    padding: 5,
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
});
export default Collection;
