import React from 'react';
import { 
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
   View 
  } from 'react-native';

import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-material-dropdown';


const OutForDelivery = () => {
 
  const onDonePressed = () => {
    navigation.navigate('Dashboard');
  };
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
    <ImageBackground
        source={require('../../../assets/img1.jpg')}
        style={{
          width: '100%',
          height: '100%'
        }}>
    
<ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.content}>
      <Text style={styles.head}>Shipment ID              XXXX</Text>
      <Text>Receipient</Text>
      <Text style={styles.form}>William Turner</Text>
      <Text>Contact number</Text>
      <Text style={styles.form}>0761234567</Text>
      <Text>District</Text>
      <Text style={styles.form}>Colombo</Text>
      <Text>City</Text>
      <Text style={styles.form}>Moratuwa</Text>
      <Text>COD amount</Text>
      <Text style={styles.form}>1000</Text>
      <Text>Status</Text>
      <Text style={styles.form}>OutforDelivey</Text>
</View>
<View style={styles.button}>
     <CustomButton
          text='Done'
         // onPress={onForgotPasswordPressed}
          //type="TERTIARY"
          bgColor={'#28388f'}
          fgColor= {'#ffffff'}
          onPress={onDonePressed}
        />

</View>
    </ScrollView>
    </ImageBackground>
    </View>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    //marginLeft:25,
    //backgroundColor: '#000000'
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
    lineHeight: 26,
  },
  button :{
    marginTop: 50,
  },
  content:{
    marginLeft: 30,
    marginRight:30
  },
  
  head :{
    marginTop: 60,
    marginLeft: 60,
    marginBottom :20,
    alignItems:'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 26,
  },
  form :{
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    marginTop :5,
    marginBottom: 10,
    }

});
export default OutForDelivery;