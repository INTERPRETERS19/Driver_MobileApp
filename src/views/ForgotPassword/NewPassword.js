import React, {useState} from 'react';
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

const NewPassword = () => {
  //const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [isSelected, setSelection] = useState(false);
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

const onChangePressed = () => {
    navigation.navigate('SignIn');
  };

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
            New Password
          </Text>

          <Text style={{fontFamily: 'Poppins',fontSize: 17, fontWeight: 'bold', textAlign: "left", color: '#656363', marginTop: 50, marginBottom: 20, marginLeft: 10, marginRight: 10, backgroundColor: '#D2F3C6'}}>
            Please create a new password that you don't use on any other site
          </Text>
        </View>

         <View style={styles.root}>
        <CustomInput
          placeholder="Create New Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput
          placeholder="Confirm your Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        </View>

         <View style={{marginTop: 20}}>
         <CustomButton
         text="Change"
         onPress={onChangePressed}
         />
         </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
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
});

export default NewPassword;