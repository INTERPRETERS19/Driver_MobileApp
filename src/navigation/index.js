import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../views/SignInScreen/SignInScreen';
import ForgotPasswordScreen from '../views/SignInScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../views/Settings/NewPasswordScreen';
import Dashboard from '../views/Dashboard/Dashboard';
import Settings from '../views/Settings/Settings';
import Menu from '../shared/Menu';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

       
      </Stack.Navigator>
    </NavigationContainer>
    
  );


  }
export default Navigation;