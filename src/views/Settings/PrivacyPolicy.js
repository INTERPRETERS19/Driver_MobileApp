import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const PrivacyPolicy = () => {
  const navigation = useNavigation();
  const onbackPressed = () => {
    navigation.navigate('Settings');
  };
  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={[styles.topbar]}>
          <Icon
            name="chevron-back"
            size={30}
            color="#9C9C9C"
            onPress={onbackPressed}
          />
        </View>
        <Text style={styles.title}>PRIVACY POLICY</Text>
        <View
          style={{
            paddingTop: 20,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's {'\n'}standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing {'\n'}Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum
            is simply dummy text of the printing and typesetting industry.{'\n'}{' '}
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, {'\n'} when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.{'\n'}
            {'\n'}It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default PrivacyPolicy;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#C5D4E3',
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
