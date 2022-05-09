import React, {useState} from 'react';
<<<<<<< HEAD
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

=======
//import RadioForm from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,

} from 'react-native';
//import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import COLORS from '../../components/colors';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';





const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
>>>>>>> 156ce00d8488cb10525c95836a61f6080838c91b
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
<<<<<<< HEAD
    // validate user
    navigation.navigate('Home');
  };

=======
    navigation.navigate('Dashboard');
  };
>>>>>>> 156ce00d8488cb10525c95836a61f6080838c91b
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

<<<<<<< HEAD
  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

=======

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
   
        {/* <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        /> */}
        <View style={{marginTop: 160}}>
          <Text style={{ fontFamily: 'Poppins',fontSize: 29, fontWeight: 'bold', textAlign: "center",
    color: COLORS.dark}}>
            Welcome!
          </Text>
          <Text style={{fontFamily: 'Poppins',fontSize: 17, fontWeight: 'bold', textAlign: "center", color: COLORS.light}}>
            Sign in to your account to continue
          </Text>
        </View>

         <View style={styles.root}>
>>>>>>> 156ce00d8488cb10525c95836a61f6080838c91b
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
<<<<<<< HEAD

        <CustomButton text="Sign In" onPress={onSignInPressed} />

=======
        </View> 
        <View style={styles.container}>
       <View style={styles.checkboxContainer}>
         <CheckBox
           value={isSelected}
           onValueChange={setSelection}
           style={styles.checkbox}
           
         />
               <Text style={{marginTop:5,fontFamily: 'Poppins',fontSize: 14,fontWeight: 'bold', textAlign: "center", color: COLORS.dark}}>
            Remember me
          </Text>
        </View>
  
     </View>
        {/* <Text style={{fontFamily: 'Poppins',fontSize: 15, fontWeight: 'bold', textAlign: "left",marginLeft:40, color: COLORS.light}}>
          Remember me
          </Text> */}
         <View style={{marginTop: 20}}>
        <CustomButton
         text="Sign In" 
         onPress={onSignInPressed}     
         />
>>>>>>> 156ce00d8488cb10525c95836a61f6080838c91b
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
<<<<<<< HEAD


        {/* <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        /> */}
      </View>
=======
        </View> 
        
>>>>>>> 156ce00d8488cb10525c95836a61f6080838c91b
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
<<<<<<< HEAD
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
=======
  // logo: {
  //   width: '70%',
  //   maxWidth: 300,
  //   maxHeight: 200,
  // },
  container: {
        flex: 1,
        alignItems: "flex-start",
      marginLeft:25,
        justifyContent: "center",
      },
      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
>>>>>>> 156ce00d8488cb10525c95836a61f6080838c91b
});

export default SignInScreen;