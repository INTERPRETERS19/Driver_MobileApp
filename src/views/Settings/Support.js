
import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
const Support = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [Description, setDescription] = useState('');
    const navigation = useNavigation();
    const onbackPressed = () => {
        navigation.navigate('Settings');
    };
    const onSendMesaagePressed = () => {
        navigation.navigate('Support');
    };
    return (
        <View style={styles.root}>
            {/* <ScrollView> */}
            <View style={[styles.topbar]}>
                <Icon
                    name="chevron-back"
                    size={30}
                    color="#000000"
                    onPress={onbackPressed}
                />
            </View>
            <Text style={styles.title}>Help and Support</Text>
            <Text style={styles.subtitile}>
                please feel free to ask you questions.we’ll contact you with better
                sollution for your problems.
            </Text>
            <View style={styles.placeHolders}>
                <CustomInput placeholder="Your name" value={name} setValue={setname} />
                <CustomInput placeholder="Email" value={email} setValue={setemail} />
                <CustomInput
                    style={{ height: 150, backgroundColor: '#451279' }}
                    placeholder="Problem Description"
                    value={Description}
                    setValue={setDescription}
                />
            </View>
            <View style={styles.button}>
                <CustomButton text="Send Messages" onPress={onSendMesaagePressed} />
            </View>
            {/* </ScrollView> */}
        </View>
    );

};
export default Support;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        //backgroundColor: '#082041',
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        textAlign: 'center',
        color: '#000000',
        paddingTop: 10,
        flex: 1,
    },
    subtitile: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        textAlign: 'center',
        color: '#000000',
        padding: 20,
        flex: 2,
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        textAlign: 'justify',
        color: '#000',
        padding: 30,
        lineHeight: 22,
        paddingTop: 0,
    },
    topbar: {
        flex: 1,
        //backgroundColor: '#C83168',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 0,
    },
    placeHolders: {
        //backgroundColor: '#A83168',
        flex: 4,
        padding: 20,
        borderColor: '#000000',
    },
    Description: {
        backgroundColor: '#451279',
        height: 150,
        overflow: 'hidden',
    },
    button: {
        flex: 3,
        alignContent: 'stretch',
        justifyContent: 'flex-start',
    },

});