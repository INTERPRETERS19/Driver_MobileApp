import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Client from '../../src/routes/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profilecomponent = () => {
  const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState();
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

  const navigation = useNavigation();
  const onProfilePressed = () => {
    navigation.navigate('Profile');
  };

  const onMenuPressed = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.topbar}>
      <Icon
        name="md-menu-sharp"
        size={35}
        color="#000000"
        onPress={onMenuPressed}
      />
      <TouchableOpacity style={styles.button} onPress={onProfilePressed}>
      {currentUser && (
        <Image
          style={styles.ProfilePicture}
          source={{uri: currentUser.photo,}}
        />)}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    padding: 20,
    flexDirection: 'row',
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  ProfilePicture: {
    width: 50,
    height: 50,
    resizeMode: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
  },
});
export default Profilecomponent;
