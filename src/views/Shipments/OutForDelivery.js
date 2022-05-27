import React from 'react';
import { Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const OutForDelivery = () => {
  const onDonePressed = () => {
    navigation.navigate('ShipmentInfo');
  };
  const navigation = useNavigation();
  return (
    <View>
      <Text>Hello, world!</Text>
      <View>
     <CustomButton
          text='Done'
         // onPress={onForgotPasswordPressed}
          //type="TERTIARY"
          bgColor={'#28388f'}
          fgColor= {'#ffffff'}
          onPress={onDonePressed}
        />

</View>
    </View>
    
  )
}
export default OutForDelivery;