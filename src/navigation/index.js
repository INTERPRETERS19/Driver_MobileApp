import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import { Feather } from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignInScreen from '../views/SignInScreen/SignInScreen';
import Dashboard from '../views/Dashboard/Dashboard';
import OutForDelivery from '../views/Shipments/OutForDelivery';
import Collections from '../views/Collections/Collections';
import Settings from '../views/Settings/Settings';
import Menu from '../shared/Menu';
import ChangePassword from '../views/Settings/ChangePassword';
import Profile from '../views/Settings/Profile';
import PrivacyPolicy from '../views/Settings/PrivacyPolicy';
import Help from '../views/Settings/Help';
import Terms from '../views/Settings/Terms';
import About from '../views/Settings/About';

import NewPassword from '../views/ForgotPassword/NewPassword';
import OTP from '../views/OTP/OTP';
import ResetSuccess from '../views/ResetSuccess/ResetSuccess';

import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={[styles.menuContainer, {backgroundColor: '#102256'}]}>
      <View style={[styles.Cont, {flex: 1.3}]}>
        <View style={[styles.menu]}>
          <ImageBackground
            style={{
              resizeMode: 'contain',
              height: '95%',
              width: '100%',
              overflow: 'hidden',
              position: 'absolute',
            }}
            source={require('../../assets/SideDrawer.png')}
          />
        </View>
        <View
          style={[
            styles.menu,
            {
              justifyContent: 'center',
              position: 'absolute',
              alignSelf: 'center',
              top: '27%',
            },
          ]}>
          <Image
            style={{
              resizeMode: 'contain',
              height: 120,
              width: 120,
              borderRadius: 100,
              overflow: 'hidden',
              borderWidth: 3,
              borderColor: 'white',
            }}
            source={require('../../assets/profile.jpg')}
          />
        </View>
      </View>
      <View style={[styles.menuItemsCard]}>
      <DrawerItem
          label="Shipments"
          labelStyle={[styles.NavPages]}
          onPress={() => {
            props.navigation.navigate('OutForDelivery');
          }}
        />
 

        <DrawerItem
          label="Collections"
          labelStyle={[styles.NavPages]}
          onPress={() => {
            props.navigation.navigate('Collections');
          }}
        />
  
        <DrawerItem
          label="Collections"
          labelStyle={[styles.NavPages]}
          onPress={() => {
            props.navigation.navigate('Collections');
          }}
        />
               <DrawerItem
          label="Dashboard"
          labelStyle={[styles.NavPages]}
          onPress={() => {
            props.navigation.navigate('Dashboard');
          }}
        />
      </View>
    </View>
  );
}

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="OutForDelivery" component={OutForDelivery} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Collections" component={Collections} />
    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={DrawerNav} />
        <Stack.Screen name="Shipments" component={OutForDelivery} />
        <Stack.Screen name="Collections" component={Collections} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChangedPassword" component={ChangePassword} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />

        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
  },
  menu: {
    flex: 2,
  },
  NavPages: {
    color: '#9C9C9C',
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 19,
    lineHeight: 32,
    letterSpacing: 1.0,
  },
  menuItemsCard: {
    flex: 2.5,
  },
  Cont: {},
});
export default Navigation;
