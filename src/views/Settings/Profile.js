import React, {useState} from 'react';
import {Image} from 'react-native' ;
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

const Profile = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

//const onBacktoAccountPressed = () => {
//    navigation.navigate('SignIn');
//  };

return (
    <ImageBackground
              source={require('../../../assets/Background.png')}
              style={{ flex: 1,

                height: '100%',
                width: '100%'
                }}
            >
            <ScrollView showsVerticalScrollIndicator={false}>



        <View style={{backgroundColor: '#FFFFFF',
                                              marginTop:350,

                                              borderRadius: 20,
                                              paddingHorizontal: 20,
                                              paddingVertical: 17}}>

          <Text style={styles.Label}>
            FULL NAME
          </Text>
                <Text style={styles.Info}>
                             Robert William
                </Text>

          <Text style={styles.Label}>
             MOBILE NUMBER
          </Text>
                <Text style={styles.Info}>
                                             0761234567
                                </Text>
          <Text style={styles.Label}>
            DRIVING LICENCE NUMBER
          </Text>
                <Text style={styles.Info}>
                                             B1234567
                                </Text>
          <Text style={styles.Label}>
              VEHICLE TYPE
          </Text>
                <Text style={styles.Info}>
                                             Motor Bike
                                </Text>
          <Text style={styles.Label}>
             VEHICLE REGISTRATION NUMBER
          </Text>
                <Text style={styles.Info}>
                                             4554654345
                                </Text>
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
        alignItems: "justify",
//      marginLeft:25,
        justifyContent: "justify",
        borderRadius: 0,

      },

      Label:{flex:1,
      fontFamily: 'Roboto',
             fontSize: 12,
             color: '#C2C2C2',
             marginLeft:15,
             marginTop:14,
             },
      Info:{ flex:1,
      fontFamily: 'Poppins',
                   fontSize: 16,
                   color: '#000000',
                   marginLeft:15,
                   marginTop:15,
                   marginBottom:14,
                   borderBottomColor: '#C2C2C2',
                   borderBottomWidth: 0.2,

      }
});

export default Profile;