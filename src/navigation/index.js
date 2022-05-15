import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../views/SignInScreen/SignInScreen';
import ForgotPasswordScreen from '../views/SignInScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../views/NewPasswordScreen/NewPasswordScreen';
import Dashboard from '../views/Dashboard/Dashboard';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

       
      </Stack.Navigator>
    </NavigationContainer>
    
  );


  }
export default Navigation;