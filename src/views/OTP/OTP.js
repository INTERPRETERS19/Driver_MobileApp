import React, {useState} from 'react';
import {
ImageBackground,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,

} from 'react-native';
import CustomInput from '../../components/CustomInput';
import COLORS from '../../components/colors';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';


const OTP = () => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

const onVerifyPressed = () => {
    navigation.navigate('NewPassword');
  };
const onBacktoMyAccountPressed = () => {
    navigation.navigate('SignIn');
  };

const onResendPressed = () => {
    navigation.navigate('SignIn');
  };


  return (
  <ImageBackground
        source={require('../../../assets/img1.jpg')}
        style={{
          display: "flex",
          flex: 1,
          height: '100%',
        }}
      >
    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{marginTop: 160}}>
          <Text style={{ fontFamily: 'Poppins',fontSize: 29, fontWeight: 'bold', textAlign: "center",
    color: COLORS.dark}}>
            Confirm OTP
          </Text>


        </View>

        <View style={{backgroundColor: '#ffffff',marginLeft: 15, marginTop: 35,
                                                      marginRight: 15,
                                                      borderRadius: 20,
                                                      paddingHorizontal: 20,
                                                      paddingVertical: 17,

                             }}>
                <View>



                  <Text style={{fontFamily: 'Poppins',fontSize: 16, fontWeight: 'normal', textAlign: "center", color: '#656363',
                               borderRadius: 9, marginTop:27}}>
                              Enter OTP we just sent to your mobile {'\n'} number: +94******567
                            </Text>



                  <CustomButton
                           text="Verify"
                           onPress={onVerifyPressed}
                           />
                                        <View style={{marginLeft:231, marginTop: -10}}>
                                            <CustomButton
                                             text="Re send"
                                             color="#578FD1"
                                             onPress={onResendPressed}
                                             type="SUB"
                                             />
                                        </View>

                </View>


                 </View>

         <View style={{marginTop: 30}}>


         <CustomButton
                  text="Back to my Account"
                  onPress={onBacktoMyAccountPressed}
                  type="TERTIARY"
                  />
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
        flex: 1,
        alignItems: "flex-start",
      marginLeft:25,
        justifyContent: "center",

      },

      label: {
        margin: 8,
      },
});

export default OTP;