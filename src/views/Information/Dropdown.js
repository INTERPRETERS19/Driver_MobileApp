import React, { Component } from 'react';
import {
    Text,
    View,
    Platform,
    StyleSheet,
    Button
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            PickerValue: ''
        }

    };
 
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:"#ffffff"
                }}>
                
                <Picker
                    style={{width:'80%'}}
                    selectedValue={this.state.PickerValue}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
              >
                <Picker.Item label="Out for delivery" value=""></Picker.Item>
                <Picker.Item label="Delivered" value="Delivered"></Picker.Item>
                <Picker.Item label="Failed to deliver" value="Failed to deliver"></Picker.Item>
                <Picker.Item label="Rescheduled" value="Rescheduled"></Picker.Item>

            </Picker>
            </View >
          );
    }

}


