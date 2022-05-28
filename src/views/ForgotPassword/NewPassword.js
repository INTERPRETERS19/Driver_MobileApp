import React, {useState} from 'react'
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
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onChangePressed = () => {
    navigation.navigate('ResetSuccess');
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

        <View style={{ marginTop: 160 }}>

          <Text style={{
            fontFamily: 'Poppins', fontSize: 29, fontWeight: 'bold', textAlign: "center",
            color: COLORS.dark
          }}>
            New Password
          </Text>

          <Text style={{
            fontFamily: 'Poppins',
            fontSize: 17,
            fontWeight: 'bold',
            textAlign: "left",
            color: '#656363',
            marginTop: 50,
            marginBottom: 20,
            marginLeft: 15,
            marginRight: 15,
            backgroundColor: '#D2F3C6',
            borderRadius: 9,
            paddingHorizontal: 20,
            paddingVertical: 17,
          }}>
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

        <View style={{ marginTop: 20 }}>
          <CustomButton
            text="Change"
            onPress={onChangePressed}
          />
        </View>
      </ScrollView>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  container: {
    flex: 1,
    alignItems: "center",
    //marginLeft:25,
    justifyContent: "center",
  },

  label: {
    margin: 8,
  },

});

export default NewPassword;