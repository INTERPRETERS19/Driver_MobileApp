import React from 'react';
//import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignInScreen from '../views/SignInScreen/SignInScreen';
import Dashboard from '../views/Dashboard/Dashboard';
import OutForDelivery from '../views/Shipments/OutForDelivery';
import DeliveredShipment from '../views/Shipments/DeliveredShipment';
import Summary from '../views/Shipments/Summary';
import RescheduledShipment from '../views/Shipments/RescheduledShipment';
import Return from '../views/Shipments/Return';
import Collections from '../views/Collections/Collections';
import Settings from '../views/Settings/Settings';
import Menu from '../shared/Menu';
import ChangePassword from '../views/Settings/ChangePassword';
import Support from '../views/Settings/Support';


import Profile from '../views/Settings/Profile';
import PrivacyPolicy from '../views/Settings/PrivacyPolicy';
import Help from '../views/Settings/Help';
import Terms from '../views/Settings/Terms';
import About from '../views/Settings/About';
import NewPassword from '../views/ForgotPassword/NewPassword';
import OTP from '../views/OTP/OTP';
import ResetSuccess from '../views/ResetSuccess/ResetSuccess';
import Support from '../views/Settings/Support';

//import {createDrawerNavigator} from '@react-navigation/drawer';
import ShipmentInfo from '../views/Shipments/ShipmentInfo';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="OutForDelivery" component={OutForDelivery} />
      <Drawer.Screen name="DeliveredShipment" component={DeliveredShipment} />
      <Drawer.Screen name="Summary" component={Summary} />
      <Drawer.Screen name="RescheduledShipment" component={RescheduledShipment} />
      <Drawer.Screen name="Return" component={Return} />
      <Drawer.Screen name="Collections" component={Collections} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );

};
const Tab = createMaterialBottomTabNavigator();

const DashboardTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Drawer"
      activeColor="white"
      inactiveColor="#8e999e"
      barStyle={{ padding: 10, backgroundColor: '#213571' }}
      labelStyle={{ fontSize: 12 }}>
      <Tab.Screen
        name="Drawer"
        component={DrawerNav} //function there dashboard
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Shipments"
        component={Summary}
        options={{
          tabBarLabel: 'Shipments',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="truck-delivery"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Collections"
        component={Collections}
        options={{
          tabBarLabel: 'Collections',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cash-marker"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications3"
        component={ShipmentInfo}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={23}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={DashboardTabScreen} />
        <Stack.Screen name="OutForDelivery" component={OutForDelivery} />
        <Stack.Screen name="DeliveredShipment" component={DeliveredShipment} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="RescheduledShipment" component={RescheduledShipment} />
        <Stack.Screen name="Return" component={Return} />
        <Stack.Screen name="Collections" component={Collections} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChangedPassword" component={ChangePassword} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Support" component={Support} />

        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
        <Stack.Screen name="ShipmentInfo" component={ShipmentInfo} />
        <Stack.Screen name="Support" component={Support} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
