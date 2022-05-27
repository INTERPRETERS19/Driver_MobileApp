import React, {useState} from 'react';
import {Image} from 'react-native' ;
import Icon from 'react-native-vector-icons/Ionicons';
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

//const onYourProfilePressed = () => {
//    navigation.navigate('Settings');
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

<View style={styles.container}>
          <Text style={{marginTop:60, fontFamily:'Roboto', fontSize: 25, color:'#FFFFFF'}}>
            Your Profile
          </Text>

                 <Image
                          style={{ display: "flex",
                                     flex: 1,
                                    resizeMode: "contain",
                                    height: 165,
                                    width:165,
                                    marginTop: 55,
                                    marginBottom:35,
                                    borderRadius: 100,
                                    overflow: 'hidden',
                                    borderWidth: 3,
                                    borderColor: 'white',
                                   }}
                         source={require('../../../assets/profile.jpg')} />
</View>

        <View style={{backgroundColor: '#FFFFFF',
                                             marginBottom:0,
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
        borderRadius: 0,
        justifyContent: "center",
            alignItems: "center",
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