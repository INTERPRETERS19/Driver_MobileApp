import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import Profilecomponent from '../../components/Profilecomponent';
import BottomNavigationBar from '../../shared/BottomNavigationBar';
import client from '../../routes/client';
import {useLogin} from '../../context/LoginProvider';

const Collection = () => {
  const [Items, setItems] = useState();
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

  const {profile} = useLogin();
  const auth = {profile};
  const loginperson = auth.profile.id;
  const [count, setCount] = useState();

  const getItems = async () => {
    try {
      const res = await client.get(`collections/${loginperson}`);
      if (res.data.success) {
        setItems(res.data.data);
        setFilterData(res.data.data);
        setCount(res.data.total);
      } else {
        console.log('Failed');
        console.log(Items);
        console.log(count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);
  const Item = ({id, COD}) => (
    <View style={styles.item}>
      <Text style={styles.Itemtext}>{id}</Text>
      <Text style={styles.Itemtamount}>{COD}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item id={item.id} COD={item.COD} />;
  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        flex: 1,
        height: '100%',
      }}>
      <View style={styles.root}>
        <Profilecomponent></Profilecomponent>
        <Text style={styles.CollectionTitle}>Collections </Text>
        <View style={styles.Collection}>
          <View style={styles.infoPanelCol}>
            <Text style={styles.text2}>Total Collections </Text>
            <Text style={styles.text1}>LKR {count} </Text>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.search}
            value={search}
            placeholder="Search"
            underlineColorAndroid="transparent"
            onChangeText={text => searchFilter(text)}
          />
        </View>
        <View style={styles.collectionSection}>
          <View style={styles.ShipementTextcont}>
            <Text style={styles.ShipementText}>Shipment ID</Text>
            <Text style={styles.ShipementText2}>COD Amount</Text>
          </View>
          <View tyle={styles.collectionSection}>
            <FlatList
              data={filterData}
              renderItem={renderItem}
              keyExtractor={item => item._id}
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
    flex: 1,
    // backgroundColor: '#298',
  },
  Collection: {
    flex: 3,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 2,
    // backgroundColor: '#333',
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
    position: 'absolute',
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
  collectionSection: {
    flex: 12,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 50,
    // backgroundColor: '#aaa',
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
    borderRadius: 12,
    paddingLeft: 20,
    margin: 20,
    borderColor: '#0096',
    backgroundColor: '#fff',
  },
});
export default Collection;
