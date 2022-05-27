import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Terms = () => {
    const navigation = useNavigation();
    const onbackPressed = () => {
        navigation.navigate('Settings');
    };
    return (
        <View style={styles.root}>
            <ScrollView>
                <View style={[styles.topbar]}>
                    <Icon name="chevron-back" size={40} color="#ffffff" onPress={onbackPressed} />
                </View>
                <Text style={styles.title}>Terms of Service</Text>
                <Text style={styles.subtitile}>Last updated on 23/05/2022</Text>
                <Text style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 16,
                    textAlign: 'center',
                    color: '#888E96',
                    paddingTop: 20,
                }}>Read the conditions below </Text>
                <View>
                    <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Text>
                    <View style={{
                        paddingLeft: 20,
                        justifyContent: 'space-between',
                    }}>
                        <Text style={styles.text}>{'\u2B24'} Lorem Ipsum is simply dummy text of the printing and typesetting industry.{'\n'}{'\u2B24'} Lorem Ipsum has been the industry's {'\n'}{'\u2B24'} standard dummy text ever since the 1500s,  {'\n'}{'\u2B24'} when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived {'\n'}{'\u2B24'} not only five centuries, but also the leap into electronic typesetting</Text>
                    </View>
                    <Text style={styles.text}>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.{'\n'}{'\n'}It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
            </ScrollView>

        </View>
    )
}
export default Terms;

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
    subtitile: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        textAlign: 'center',
        color: '#888E96',
        padding: 0,
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        textAlign: 'justify',
        color: '#EFEFEF',
        padding: 20,
        paddingTop: 0,
    },
    topbar: {
        flex: 0.8,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 0,
    },
});