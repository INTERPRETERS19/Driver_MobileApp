// import React, {useState} from 'react';
// import {
//   ImageBackground,
//   View,
//   Text,
//   StyleSheet,
//   useWindowDimensions,
//   ScrollView,
// } from 'react-native';
// import COLORS from '../../components/colors';
// import CustomButton from '../../components/CustomButton';
// import {useNavigation} from '@react-navigation/native';
// import OTPTextView from 'react-native-otp-textinput';

// const OTP = () => {
//   const {height} = useWindowDimensions();
//   const navigation = useNavigation();

//   const onVerifyPressed = () => {
//     navigation.navigate('NewPassword');
//   };

//   const onBacktoMyAccountPressed = () => {
//     navigation.navigate('SignIn');
//   };

//   const onResendPressed = () => {
//     navigation.navigate('OTP');
//   };

//   return (
//     <ImageBackground
//       source={require('../../../assets/img1.jpg')}
//       style={{
//         display: 'flex',
//         flex: 1,
//         height: '100%',
//       }}>
//       <View style={{marginTop: 120, flex: 1}}>
//         <Text
//           style={{
//             fontFamily: 'Poppins',
//             fontSize: 29,
//             fontWeight: 'bold',
//             textAlign: 'center',
//             color: COLORS.dark,
//           }}>
//           Confirm OTP
//         </Text>
//       </View>

//       <View style={styles.Box}>
//         <View>
//           <Text
//             style={{
//               fontFamily: 'Poppins',
//               fontSize: 16,
//               fontWeight: 'normal',
//               textAlign: 'center',
//               color: '#656363',
//               borderRadius: 9,
//               padding: 20,
//             }}>
//             Enter OTP we just sent to your mobile {'\n'} number: +94******567
//           </Text>

//           <View>
//             <OTPTextView
//               handleTextChange={e => {}}
//               containerStyle={styles.textInputContainer}
//               textInputStyle={styles.roundedTextInput}
//               inputCount={4}
//               inputCellLength={1}
//             />
//           </View>
//           <View style={styles.verify}>
//             <CustomButton text="Verify" onPress={onVerifyPressed} />
//           </View>
//           <View style={styles.sub}>
//             <CustomButton text="Re-send" onPress={onResendPressed} type="SUB" />
//           </View>
//         </View>
//       </View>

//       <View style={styles.back}>
//         <CustomButton
//           text="Back to my Account"
//           onPress={onBacktoMyAccountPressed}
//           type="TERTIARY"
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'flex-start',
//     marginLeft: 25,
//     justifyContent: 'center',
//   },

//   textInputContainer: {
//     marginBottom: 20,
//     marginTop: 20,
//   },

//   roundedTextInput: {
//     width: 70,
//     height: 70,
//     borderRadius: 11,
//     borderWidth: 5,
//     backgroundColor: '#F5F6F7',
//   },

//   sub: {
//     display: 'flex',
//     flex: 1,
//   },
//   // verify: {
//   //   flex: 2,
//   // },
//   Box: {
//     backgroundColor: '#ffffff',
//     borderRadius: 20,
//     padding: 20,
//     width: 350,
//     alignSelf: 'center',
//     flex: 4.5,
//   },
//   back: {
//     flex: 2,
//   },
// });

// export default OTP;
import React, { Component } from 'react';
import {
    Text,
    View,
    Platform,
    StyleSheet,
    Button
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            PickerValue: ''
        }

    };

 
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Roboto-Bold',
                    fontSize: 22,
                    backgroundColor:"rgba(0, 0, 0, 0.02)"
                }}>
                
                <Picker
                    style={{width:'80%'}}
                    selectedValue={this.state.PickerValue}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
              >
                <Picker.Item label="Out for delivery" value=""></Picker.Item>
                <Picker.Item label="Delivered" value="Delivered"></Picker.Item>
                <Picker.Item label="Failed to deliver" value="Failed to deliver"></Picker.Item>
                <Picker.Item label="Rescheduled" value="Rescheduled"></Picker.Item>

            </Picker>
            </View>
          );
    }

}
