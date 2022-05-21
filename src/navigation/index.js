import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../views/SignInScreen';
import ConfirmEmailScreen from '../views/ConfirmEmailScreen';
import Dashboard from '../views/Dashboard';
import NewPassword from '../views/ForgotPassword';
import OTP from '../views/OTP';
import ResetSuccess from '../views/ResetSuccess';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="OTP" component={OTP}/>
        <Stack.Screen name="ResetSuccess" component={ResetSuccess}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;