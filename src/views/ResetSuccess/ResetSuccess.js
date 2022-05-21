import React, {useState} from 'react';
import {Image} from 'react-native' ;
import {
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

const ResetSuccess = () => {
//  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

const onBacktoAccountPressed = () => {
    navigation.navigate('SignIn');
  };

return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
        <Image
                 style={{
                            flex: 1,
                            resizeMode: "contain",
                            marginTop:140,
                            height:170
                          }}
                source={require('./successimg.png')} />
    </View>

        <View>

           <Text style={{ fontFamily: 'Poppins',fontSize: 29, fontWeight: 'bold', textAlign: "center",
               color: COLORS.dark}}>
                     {'\n'}  Password Reset{'\n'}Successful
                       {'\n'}
                     </Text>


          <Text style={{fontFamily: 'Poppins',fontSize: 17, fontWeight: 'bold', textAlign: "center", color: '#656363', marginLeft: 10, marginRight: 10}}>
            Please note that your password has been changed successfully for the account Interpreters05 {'\n'}
          </Text>
        </View>

         <View style={{marginTop: 20}}>
         <CustomButton
         text="Back to my Account"
         onPress={onBacktoAccountPressed}
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

  container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
      marginLeft:25,
        justifyContent: "center",
        borderRadius: 4,
      },

      label: {
        margin: 8,
      },
});

export default ResetSuccess;