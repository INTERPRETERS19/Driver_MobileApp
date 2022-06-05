import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Profilecomponent from '../../components/Profilecomponent';
const Summary = () => {
  const navigation = useNavigation();
  //#C3E4F5
  //#213571
  //#000000
  //#7E7D7D
  const [Items, setItems] = useState([
    {key: 1, item: '001854', address: 'Atchuvely', name: ' '},
    {key: 2, item: '741541', address: 'Kodikamam', name: ' '},
    {key: 3, item: '638524', address: 'Nelliyadi', name: ' '},
    {key: 4, item: '096471', address: 'Chavakacheri', name: ' '},
    {key: 5, item: '631901', address: 'Chunnakam', name: ' '},
    {key: 6, item: '001854', address: 'Kantharodai', name: ' '},
    {key: 7, item: '741541', address: 'Meesalai', name: ' '},
    {key: 9, item: '741541', address: 'Meesalai', name: ' '},
    {key: 10, item: '741541', address: 'Meesalai', name: ' '},
    {key: 11, item: '741541', address: 'Meesalai', name: ' '},
    {key: 12, item: '741541', address: 'Meesalai', name: ' '},
    {key: 13, item: '741541', address: 'Meesalai', name: ' '},
    {key: 14, item: '741541', address: 'Meesalai', name: ' '},
  ]);

  const onArrowPressed = () => {
    navigation.navigate('ShipmentInfo');
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../../../assets/img1.jpg')}
        style={{width: '100%', height: '100%'}}>
         <Profilecomponent></Profilecomponent>
          <View style={[styles.Out]}>
            <View style={[styles.Summary]}>
              <Text style={[styles.SummaryText]}>Summary</Text>
            </View>

            <View style={styles.ShipmentSection}>
            <View style={styles.ShipementTextcont}>
              <Text style={styles.ShipementText}>ShipmentID</Text>
              <Text style={styles.ShipementText}>Address</Text>
            </View>
              <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                {Items.map(object => {
                  return (
                    <View style={styles.item} key={object.key}>
                      <Text style={styles.Itemtext}>{object.item}</Text>
                      <Text style={styles.Itemtext}>{object.address}</Text>
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
              </ScrollView>
            </View>
          </View>
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
  Summary: {
    flex: 1,
    padding: 15,
    color: '#000000',
    lineHeight: 22,
    letterSpacing: 4,
    textTransform: 'uppercase',
    justifyContent: 'space-between',
  },
  SummaryText: {
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
  ShipmentTextcont: {
    justifyContent: 'space-between',
    fontFamily: 'Montserrat-Medium',
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    flex: 10,
  },
  ShipementText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  Itemtext: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    color: '#000000',
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

export default Summary;
