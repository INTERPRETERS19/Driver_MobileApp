import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
const index = () => {

  const navigation = useNavigation();
  const onHomePress = () => {
    navigation.navigate('SignIn');
  }
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home</Text>
      <CustomButton
          text="Login"
          onPress={onHomePress}
          type="TERTIARY"
        /> 
    
    </View>
  );
};

export default index;

