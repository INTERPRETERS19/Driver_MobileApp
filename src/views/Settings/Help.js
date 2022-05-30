import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
const Help = () => {
    const navigation = useNavigation();
    const onbackPressed = () => {
        navigation.navigate('Settings');
    };
    const onSendMesaagePressed = () => {
        navigation.navigate('Support');
    };

    return (
        <View style={styles.root}>
            <ScrollView>
                <View style={[styles.topbar]}>
                    <Icon name="chevron-back" size={30} color="#9C9C9C" onPress={onbackPressed} />
                </View>
                <Text style={styles.title}>Help and Support</Text>
                <View style={{
                    paddingTop: 20,
                    justifyContent: 'space-between',
                }}>

                </View>
                <Text style={styles.SubHeading}>We're here to help you with anything and everything on IndexCloud.</Text>
                <View>
                    <Text style={styles.SubHeadingText} >At IndexCloud everything we expect a full customer satisfaction in our delivery service.Share your concern or check our frequently asked questions listed below</Text>
                </View>
                <View>
                    <View>
                        <View style={styles.button}>
                            <CustomButton
                                text='Send Message'
                                onPress={onSendMesaagePressed}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
export default Help;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        //backgroundColor: '#C5D4E3',
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        textAlign: 'center',
        color: '#000000',
        letterSpacing: 3,
        paddingTop: 20,
        flex: 1,
    },
    SubHeading: {
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: '#000',
        //fontSize:'18',
    },
    SubHeadingText: {
        textAlign: 'center',
        color: '#000'
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        textAlign: 'justify',
        color: '#5A5A5A',
        padding: 30,
        lineHeight: 22,
        paddingTop: 0,
    },
    topbar: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 0,
    },
});