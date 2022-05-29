import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,

} from 'react-native';
import COLORS from '../../components/colors';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ResetSuccess = () => {
  //  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onBacktoAccountPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground
      source={require('../../../assets/img1.jpg')}
      style={{
        flex: 1,

        height: '100%',
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
          <Image
            style={{
              flex: 1,
              resizeMode: "contain",
              marginTop: 140,
              height: 170
            }}
            source={require('./successimg.png')} />
        </View>

        <View style={{
          backgroundColor: '#ffffff', marginLeft: 15, marginTop: 35,
          marginRight: 15,
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 17,
          //                                               shadowColor: '#000',
          //     shadowOffset: {
          //       width: 10,
          //       height: 5,
          //     },
          // shadowOpacity:0.5,
          //     shadowRadius: 5,
          //     elevation: 6,


        }}>
          <View>
            <Text style={{
              fontFamily: 'Poppins', fontSize: 29, fontWeight: 'bold', marginTop: -30, textAlign: "center",
              color: COLORS.dark
            }}>
              {'\n'}  Password Reset{'\n'}Successful
              {'\n'}
            </Text>


            <Text style={{ fontFamily: 'Poppins', fontSize: 16.5, textAlign: "center", color: '#656363', marginLeft: 10, marginRight: 10 }}>
              Please note that your password has been changed successfully for the account:
              <Text style={{ fontWeight: "bold" }}> Eren Jeager</Text>
            </Text>
          </View>

          <View style={{ marginTop: 15 }}>
            <CustomButton
              text="Back to my Account"
              onPress={onBacktoAccountPressed}
            />
          </View>
        </View>

      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    marginLeft: 25,
    justifyContent: "center",
    borderRadius: 4,
  },

  label: {
    margin: 8,
  },
});

export default ResetSuccess;