// // import React, { useState } from 'react';
// // import {
// //   ImageBackground,
// //   View,
// //   Text,
// //   StyleSheet,
// //   useWindowDimensions,
// //   ScrollView,
// // } from 'react-native';
// // import COLORS from '../../components/colors';
// // import CustomButton from '../../components/CustomButton';
// // import { useNavigation } from '@react-navigation/native';
// // import OTPTextView from 'react-native-otp-textinput';
// // import {isValidObjField, updateError} from '../../utils/methods';

// // const OTP = () => {
// //   const { height } = useWindowDimensions();
// //   const navigation = useNavigation();
// //   //const [error, setError] = useState('');

// //   const onVerifyPressed = () => {
// // //        return updateError('Enter 4 digits!', setError);
// // //             console.log(error);
// // //        }else
// //           navigation.navigate('NewPassword');
// //     //navigation.navigate('NewPassword');
// //   };

// //   const onBacktoMyAccountPressed = () => {
// //     navigation.navigate('SignIn');
// //   };

// //   const onResendPressed = () => {
// //     navigation.navigate('OTP');
// //   };

// //   return (
// //     <ImageBackground
// //       source={require('../../../assets/img1.jpg')}
// //       style={{
// //         display: "flex",
// //         flex: 1,
// //         height: '100%',
// //       }}
// //     >
// //       <ScrollView showsVerticalScrollIndicator={false}>

// //         <View style={{ marginTop: 160 }}>
// //           <Text style={{
// //             fontFamily: 'Poppins', fontSize: 29, fontWeight: 'bold', textAlign: "center",
// //             color: COLORS.dark
// //           }}>
// //             Confirm OTP
// //           </Text>
// //         </View>

// //         <View style={styles.Box}>
// //           <View>

// //             <Text style={{
// //               fontFamily: 'Poppins', fontSize: 16, fontWeight: 'normal', textAlign: "center",
// //               color: '#656363', borderRadius: 9, marginTop: 27
// //             }}>
// //               Enter OTP we just sent to your mobile {'\n'} number: +94******567
// //             </Text>

// //             {/* <View>
// //               <OTPTextView
// //                 handleTextChange={(e) => { }}
// //                 containerStyle={styles.textInputContainer}
// //                 textInputStyle={styles.roundedTextInput}
// //                 inputCount={4}
// //                 inputCellLength={1}
// //               />
// //             </View> */}

// //             <CustomButton
// //               text="Verify"
// //               onPress={onVerifyPressed}
// //             />
// //             <View style={styles.sub}>
// //               <CustomButton
// //                 text="Re-send"
// //                 onPress={onResendPressed}
// //                 type="SUB"
// //               />
// //             </View>

// //           </View>
// //         </View>

// //         <View>
// //           <CustomButton
// //             text="Back to my Account"
// //             onPress={onBacktoMyAccountPressed}
// //             type="TERTIARY"
// //           />
// //         </View>

// //       </ScrollView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "flex-start",
// //     marginLeft: 25,
// //     justifyContent: "center",
// //   },

// //   textInputContainer: {
// //     marginBottom: 20,
// //     marginTop: 20
// //   },

// //   roundedTextInput: {
// //     width: 70,
// //     height: 70,
// //     borderRadius: 11,
// //     borderWidth: 5,
// //     backgroundColor: '#F5F6F7',
// //   },

// //   sub: {
// //     display: "flex",
// //     flex: 1,
// //     paddingLeft: 212,
// //     marginTop: -17
// //   },

// //   Box: {
// //     backgroundColor: '#ffffff',
// //     marginLeft: 15,
// //     marginTop: 35,
// //     marginRight: 15,
// //     borderRadius: 20,
// //     paddingHorizontal: 20,
// //     paddingVertical: 17,
// //   }
// // });

// // export default OTP;

// // import React, {useState} from 'react';
// // import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
// // import Parse from 'parse/react-native';
// // import {useNavigation} from '@react-navigation/native';
// // //import Styles from '../../';

// // export const OTP = () => {
// //   const navigation = useNavigation();
// //   const [userData, setUserData] = useState('');
// //   const [userToken, setUserToken] = useState('');
// //   const [tokenRequested, setTokenRequested] = useState(false);

// //   const requestOTP = async function () {
// //     // Note that this values come from state variables that we've declared before
// //     const userDataValue = userData;
// //     // Check if value is an email if it contains @. Note that in a real
// //     // app you need a much better validator for this field
// //     const verificationType =
// //       userDataValue.includes('@') === true ? 'email' : 'sms';
// //     // We need to call it using await
// //     try {
// //       await Parse.Cloud.run('requestOTP', {
// //         userData: userDataValue,
// //         verificationType: verificationType,
// //       });
// //       // Show token input field
// //       setTokenRequested(true);
// //       Alert.alert('Success!', `Token requested via ${verificationType}!`);
// //       return true;
// //     } catch (error) {
// //       Alert.alert('Error!', error.message);
// //       return false;
// //     }
// //   };

// //   const verifyOTP = async function () {
// //     // Note that this values come from state variables that we've declared before
// //     const userDataValue = userData;
// //     const userTokenValue = userToken;
// //     // Check if value is an email if it contains @. Note that in a real
// //     // app you need a much better validator for this field
// //     const verificationType =
// //       userDataValue.includes('@') === true ? 'email' : 'sms';
// //     // We need the installation id to allow cloud code to create
// //     // a new session and login user without password
// //     const parseInstallationId = await Parse._getInstallationId();
// //     // We need to call it using await
// //     try {
// //       // Verify OTP, if successful, returns a sessionId
// //       let response = await Parse.Cloud.run('verifyOTP', {
// //         userData: userDataValue,
// //         verificationType: verificationType,
// //         userToken: userTokenValue,
// //         parseInstallationId: parseInstallationId,
// //       });
// //       if (response.sessionId !== undefined) {
// //         // Use generated sessionId to become a user,
// //         // logging in without needing to inform password and username
// //         await Parse.User.become(response.sessionId);
// //         const loggedInUser = await Parse.User.currentAsync();
// //         Alert.alert(
// //           'Success!',
// //           `User ${loggedInUser.get('username')} has successfully signed in!`,
// //         );
// //         // Navigation.navigate takes the user to the home screen
// //         navigation.navigate('Home');
// //         return true;
// //       } else {
// //         throw response;
// //       }
// //     } catch (error) {
// //       Alert.alert('Error!', error.message);
// //       return false;
// //     }
// //   };

// //   return (
// //     <View style={Styles.login_wrapper}>
// //       {tokenRequested === false ? (
// //         <View style={Styles.form}>
// //           <TextInput
// //             style={Styles.form_input}
// //             value={userData}
// //             placeholder={'Email or mobile phone number'}
// //             onChangeText={text => setUserData(text)}
// //             autoCapitalize={'none'}
// //             keyboardType={'email-address'}
// //           />
// //           <TouchableOpacity onPress={() => requestOTP()}>
// //             <View style={Styles.button}>
// //               <Text style={Styles.button_label}>{'Request OTP'}</Text>
// //             </View>
// //           </TouchableOpacity>
// //         </View>
// //       ) : (
// //         <View style={Styles.form}>
// //           <Text>{'Inform the received token to proceed'}</Text>
// //           <TextInput
// //             style={Styles.form_input}
// //             value={userToken}
// //             placeholder={'Token (6 digits)'}
// //             onChangeText={text => setUserToken(text)}
// //             autoCapitalize={'none'}
// //             keyboardType={'default'}
// //           />
// //           <TouchableOpacity onPress={() => verifyOTP()}>
// //             <View style={Styles.button}>
// //               <Text style={Styles.button_label}>{'Verify'}</Text>
// //             </View>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => requestOTP()}>
// //             <View style={Styles.button}>
// //               <Text style={Styles.button_label}>{'Resend token'}</Text>
// //             </View>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </View>
// //   );
// // };

// import React, {useState} from 'react';
// import {ImageBackground} from 'react-native';
// import client from '../../routes/client';
// import {useLogin} from '../../context/LoginProvider';
// import {isValidEmail, isValidObjField, updateError} from '../../utils/methods';

// import {
//   View,
//   Text,
//   StyleSheet,
//   useWindowDimensions,
//   ScrollView,
// } from 'react-native';
// //import FormInput from '../../components/FormInput';
// import COLORS from '../../components/colors';
// import CustomButton from '../../components/CustomButton';
// import CustomInput from '../../components/CustomInput';
// import {useNavigation} from '@react-navigation/native';

// const Verification = () => {
//   const {setIsLoggedIn, setProfile} = useLogin();
//   const [userInfo, setUserInfo] = useState({
//     email: '',
//     mobile_number: '',
//   });

//   const [error, setError] = useState('');
//   const [isSelected, setSelection] = useState(false);
//   const {email, mobile_number} = userInfo;

//   const handleOnChangeText = (value, fieldName) => {
//     setUserInfo({...userInfo, [fieldName]: value});
//   };

//   //   const onVerifyPressed = () => {
//   //   navigation.navigate('NewPassword');
//   // };

//   const isValidForm = () => {
//     if (!isValidObjField(userInfo))
//       return updateError('Required all fields!', setError);

//     if (!isValidEmail(email)) return updateError('Invalid email!', setError);

//     return true;
//   };

//   const submitForm = async () => {
//     if (isValidForm()) {
//       try {
//         const res = await client.post('/verify', {...userInfo});

//         if (res.data.success) {
//           setUserInfo({email: '', mobile_number: ''});
//           setProfile(res.data.user);
//           setIsLoggedIn(true);
//         }

//         console.log(res.data);
//         navigation.navigate('NewPassword');
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const navigation = useNavigation();

//   const onBackPressed = () => {
//     navigation.navigate('SignIn');
//   };

//   return (
//     <ImageBackground
//       source={require('../../../assets/img1.jpg')}
//       style={{
//         width: '100%',
//         height: '100%',
//       }}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{marginTop: 160}}>
//           <Text
//             style={{
//               fontFamily: 'Poppins',
//               fontSize: 29,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               color: COLORS.dark,
//             }}>
//             Verfication
//           </Text>
//           <Text
//             style={{
//               fontFamily: 'Poppins',
//               fontSize: 17,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               color: COLORS.light,
//             }}>
//             Verify It's You
//           </Text>
//         </View>

//         <View style={styles.root}>
//           {error ? (
//             <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
//               {error}
//             </Text>
//           ) : null}
//           <CustomInput
//             placeholder="Email"
//             value={email}
//             autoCapitalize="none"
//             setValue={value => setUserInfo({...userInfo, email: value})}
//           />
//           <CustomInput
//             placeholder="Mobile number"
//             value={mobile_number}
//             setValue={value => setUserInfo({...userInfo, mobile_number: value})}
//             secureTextEntry
//           />
//         </View>
//         <View style={styles.container}></View>
//         <View style={{marginTop: 20}}>
//           {/* <CustomButton text="Sign In" onPress={onSignInPressed} /> */}
//           <CustomButton text="Verify" onPress={submitForm} />
//           <CustomButton
//             text="Back to Sign In"
//             onPress={onBackPressed}
//             type="TERTIARY"
//           />
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//   },

//   container: {
//     flex: 1,
//     alignItems: 'flex-start',
//     marginLeft: 25,
//     justifyContent: 'center',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   checkbox: {
//     alignSelf: 'center',
//   },
//   label: {
//     margin: 8,
//   },
// });

// export default Verification;
