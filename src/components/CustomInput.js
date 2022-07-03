import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={'#c0c6c9'}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={passwordVisible}
        right={
          <TextInput.Icon
            color={'#c0c0c0'}
            name={passwordVisible ? 'eye-off' : 'eye'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    fontFamily: 'Poppins-Medium',
    borderColor: '#c0c6c9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 7,
  },
  input: {
    color: '#000000',
  },
});

export default CustomInput;
