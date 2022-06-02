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
import OTPTextView from 'react-native-otp-textinput';

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
    navigation.navigate('OTP');
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

            <View>
                <OTPTextView
                          handleTextChange={(e) => {}}
                          containerStyle={styles.textInputContainer}
                          textInputStyle={styles.roundedTextInput}
                          inputCount={4}
                          inputCellLength={1}
                        />
            </View>

                  <CustomButton
                           text="Verify"
                           onPress={onVerifyPressed}
                           />
                                        <View style={{display: "flex", flex:1,  paddingLeft:228, marginTop: -17}}>
                                            <CustomButton
                                             text="Re-send"
                                             onPress={onResendPressed}
                                             type="SUB"
                                             />
                                        </View>

                </View>
                 </View>

         <View>
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

      textInputContainer: {
          marginBottom: 20,
          marginTop: 20
        },

      roundedTextInput: {
         width: 70,
         height: 70,
         borderRadius: 11,
         borderWidth: 5,
         backgroundColor:'#F5F6F7',
      },
});

export default OTP;