import React from 'react';
import { Text, View,ScrollView,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicy = () => {
    const navigation=useNavigation();
    const onbackPressed = () => {
        navigation.navigate('Settings');
    };
    return (
        <View style={styles.root}>
         <ScrollView> 
         <View style={[styles.topbar]}>
                    <Icon name="chevron-back" size={40} color="#ffffff" onPress={onbackPressed} />
                </View>
            <Heading>Privacy Policy!</Heading>
        </ScrollView> 
        </View>
    )
}
export default PrivacyPolicy;
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#1B2635',
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff',
        paddingTop: 10,
    },
});