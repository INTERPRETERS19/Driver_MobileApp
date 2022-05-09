import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import CustomButton from '../../components/CustomButton';
const Dashboard = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home</Text>
    </View>
  );
};

export default Dashboard;

