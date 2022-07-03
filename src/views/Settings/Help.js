import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import {List} from 'react-native-paper';
const Help = () => {
  const navigation = useNavigation();
  const onbackPressed = () => {
    navigation.navigate('Settings');
  };
  const onSendMesaagePressed = () => {
    navigation.navigate('Support');
  };
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

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

        <View>
          <Text style={styles.title}>Help and Support</Text>
        </View>

        <View
          style={{
            paddingTop: 20,
            justifyContent: 'space-between',
          }}></View>
        <Text style={styles.SubHeading}>
          We're here to help you with anything and everything on IndexCloud.
        </Text>
        <View>
          <Text style={styles.SubHeadingText}>
            At IndexCloud everything we expect a full customer satisfaction in
            our delivery service.Share your concern or check our frequently
            asked questions listed below
          </Text>
        </View>

        <View>
          <List.Section>
            <View>
              <Text style={styles.AccordionTitle}>FAQ</Text>
            </View>
            <Text
              style={{
                // backgroundColor: '#c23569',
                paddingTop: 1,
                height: 5,
                borderBottomColor: '#a5a5a5',
                borderBottomWidth: 1,
              }}></Text>
            <List.Accordion title="What is IndexCloud?">
              <View style={styles.AccordionText}>
                <Text>
                  Lorem Ipsum is simply dummy text of the {'\n'} printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </Text>
              </View>
            </List.Accordion>
            <List.Accordion title="How to use IndexCloud?">
              <View style={styles.AccordionText}>
                <Text>
                  Lorem Ipsum is simply dummy text of the {'\n'} printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </Text>
              </View>
            </List.Accordion>

            <List.Accordion title="What is IndexCloud?">
              <View style={styles.AccordionText}>
                <Text>
                  Lorem Ipsum is simply dummy text of the {'\n'} printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </Text>
              </View>
            </List.Accordion>
            <List.Accordion title="Who can use application?">
              <View style={styles.AccordionText}>
                <Text>
                  Lorem Ipsum is simply dummy text of the {'\n'} printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </Text>
              </View>
            </List.Accordion>
            <List.Accordion title="Can I pay via Visa card?">
              <View style={styles.AccordionText}>
                <Text>
                  Lorem Ipsum is simply dummy text of the {'\n'} printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </Text>
              </View>
            </List.Accordion>
            <List.Accordion title="Do we need to pay money when create account?">
              <View style={styles.AccordionText}>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and{'\n'}
                  typesetting industry. Lorem Ipsum has been the industry's
                  {'\n'}
                  standard dummy text ever since the 1500s, when an unknown
                  {'\n'}
                  printer took a galley of type and scrambled it to make a type
                </Text>
              </View>
            </List.Accordion>
          </List.Section>
        </View>
        {/* <View>
          //<Text style={styles.mailText}>Still stuck? Help is mail away</Text>
        </View> */}
        <View>
          <View>
            {/* <View style={styles.button}>
              <CustomButton
                text="Send Message"
                onPress={onSendMesaagePressed}
              />
            </View> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Help;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //backgroundColor: '#C5D4E3',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    letterSpacing: 3,
    paddingTop: 20,
    flex: 1,
  },
  SubHeading: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    color: '#747B84',
    fontSize: 18,
  },
  SubHeadingText: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#a5a5a5',
    fontSize: 16,
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
  AccordionTitle: {
    fontFamily: 'Roboto-Regular',
    paddingTop: 10,
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  AccordionText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textAlign: 'justify',
    backgroundColor: '#9AB3CE',
    paddingLeft: 30,
    lineHeight: 30,
    paddingTop: 0,
    width: '100%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  mailText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },
});
