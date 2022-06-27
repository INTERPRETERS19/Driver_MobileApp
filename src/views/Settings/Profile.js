import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState, useEffect} from 'react';
import Client from '../../routes/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// const DriverID = '62a9f35b74963c4338b92425';

const Profile = () => {
  const [currentUser, setCurrentUser] = useState();
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [user, setUser] = useState();
  //   {
  //     fullname: '',
  //     mobile_number: '',
  //     driving_licence_no: '',
  //     vehicle_type: '',
  //     vehicle_reg_No: '',
  // }
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      await AsyncStorage.getItem('@MyApp_user').then(res => {
        console.log(res);
        setCurrentUser(res != null ? JSON.parse(res) : null);
        getUser(JSON.parse(res).id);
      });
    } catch (e) {
      // console.log(e);
    }
  };

  const getUser = async userId => {
    await Client.get('/profile', {_id: userId})
      .then(response => {
        setUser(response.data);
        // console.log(response);
      })
      .catch(err => {
        console.log('Unable to get profile');
      });
  };

  const onbackPressed = () => {
    navigation.navigate('Dashboard');
  };
  // console.log(user);

  return (
    <ImageBackground
      source={require('../../../assets/Background.png')}
      style={{
        flex: 1,
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View style={styles.TopCont}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: '50%',
              }}>
              <Icon
                name="chevron-back"
                size={30}
                color="#FFFFFF"
                onPress={onbackPressed}
              />
              <Text
                style={{
                  fontFamily: 'SF-Pro-Display-Medium',
                  letterSpacing: 0.5,
                  fontSize: 23,
                  color: '#FFFFFF',
                  justifyContent: 'center',
                }}>
                Your Profile
              </Text>
            </View>
          </View>

          <View style={styles.container}>
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
                height: 170,
                width: 170,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: 'white',
              }}
              // source={require('../../../assets/profile.jpg')}
            />
            {/* <div>
        <form action="/" method="POST" enctype="multipart/form-data"></form>
             <div>
                <label for="image">Upload Image</label>
                <input type="file" id="image" 
                       name="image" value="" required>
            </div>
            </div> */}
          </View>
          <View
            style={{
              display: 'flex',
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 17,
              marginTop: 25,
            }}>
            {currentUser && (
              <>
                <Text style={styles.Label}>FULL NAME</Text>
                <Text style={styles.Info}>{currentUser.fullname}</Text>
                <Text style={styles.Label}>MOBILE NUMBER</Text>
                <Text style={styles.Info}>{currentUser.mobile_number}</Text>
                <Text style={styles.Label}>DRIVING LICENSE NUMBER</Text>
                <Text style={styles.Info}>
                  {currentUser.driving_licence_no}
                </Text>
                <Text style={styles.Label}>VEHICLE TYPE</Text>
                <Text style={styles.Info}>{currentUser.vehicle_type}</Text>
                <Text style={styles.Label}>VEHICLE REGISTRATION NUMBER</Text>
                <Text style={styles.Info}>{currentUser.vehicle_reg_No}</Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  TopCont: {
    padding: 12,
    marginTop: 25,
  },
  container: {
    display: 'flex',
    flex: 1,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  Label: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#C2C2C2',
    marginLeft: 15,
    marginTop: 14,
  },
  Info: {
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#000000',
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 14,
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.2,
  },
});

export default Profile;
