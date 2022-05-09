import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../views/SignInScreen';
import ConfirmEmailScreen from '../views/ConfirmEmailScreen';
import ForgotPasswordScreen from '../views/ForgotPasswordScreen';
import NewPasswordScreen from '../views/NewPasswordScreen';
<<<<<<< HEAD
import HomeScreen from '../views/HomeScreen';
=======
import Dashboard from '../views/Dashboard';
>>>>>>> 156ce00d8488cb10525c95836a61f6080838c91b

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
<<<<<<< HEAD
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
=======
      <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
>>>>>>> 156ce00d8488cb10525c95836a61f6080838c91b
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;