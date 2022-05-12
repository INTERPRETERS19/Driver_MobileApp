import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import PieChart from 'react-native-pie-chart';

const Dashboard = () => {

  const navigation = useNavigation();
  const widthAndHeight = 185
  const series = [173, 321, 123, 789]
  const sliceColor = ['#C3E4F5','#599AC6','#D8E6F5','#213571',]
      
  return (
    <View style={styles.root}>
    <Text style = {styles.welcome}>Welcome</Text>
       <Text style = {styles.nameD}>Eren Jeager,</Text>
        <Text style={styles.text}>Dashboard</Text>
        <View style={styles.icon}>   
            <Icon name="md-menu-sharp" size={40} color="#000000" />
          </View>
          <View style={styles.iconSettings}>   
            <Icon name="settings-sharp" size={35} color="#000000" />
          </View>

          <View style={styles.box}>
  
          </View>
          <View style={styles. buttonContainer1}>   
          </View>
          <View style={styles. buttonContainer2}>   
          </View>
          <View style={styles. buttonContainer3}>   
          </View>
          <View style={styles. buttonContainer4}>   
          </View>
          <View style={styles. buttonContainer5}>   
          </View>
          <View style={styles.container}>
          {/* <Text style={styles.title}>Basic</Text>
          
          /> */}
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
          </View>
     
  );

};
const styles = StyleSheet.create({

  root: {
    //flex:1,
    padding: 20,
  },
  container: {
    // flex: 1,
     position:'absolute',
    // width: 250,
    // height: 250,
     left: 30,
     top: 460,
    // alignItems: 'center',
  },
  fontText: {
    fontFamily: 'Zocial',
    fontSize: 20,
  },
  welcome:{
    position: "absolute",
    width: 59,
    height: 16,
    left: 39,
    top: 85, 
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: "#2566AD",  
  },
  icon: {
    size: '30',
    position: 'absolute',
    width: 34,
    height: 34,
    left: 36,
    top: 25,
  },
  iconSettings:{
    position: 'absolute',
    width: 36,
    height: 45,
    right:36,
    top: 30,
  },
   nameD : {
    position: "absolute",
    width: 140,
    height: 26,
    left: 39,
    top: 100,   
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 26,
    color: "#000000",   
  },
  text: {
      height: 22,
      left: 97,
      top: 125,
      fontFamily: 'Montserrat-Medium',
      fontStyle: 'normal',
      fontSize: 18,
      lineHeight: 22,
      letterSpacing: 4,
      textTransform: "uppercase",
    color: "rgba(0, 0, 0, 0.3)"
    },
  box:{
   //shadowColor: '#000',
    position: 'absolute',
    width: 400,
    height: 245,
    left: 0,
    top: 190,
    backgroundColor: '#D1D1D1',
    borderTopLeftRadius: 40,
    //borderRadius: '40,0,0,0',
  },
  buttonContainer1:{
    position: 'absolute',
    width: 95,
    height: 81,
    left: 40,
    top: 220,
    backgroundColor:'#C3E4F5',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,  
    elevation: 11,
  },
  buttonContainer2:{
    position: 'absolute',
    width: 95,
    height: 81,
    left: 155,
    top: 220,  
    backgroundColor:'#213571',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,  
    elevation: 11,
  },
  buttonContainer3:{
    position: 'absolute',
    width: 95,
    height: 81,
    left: 40,
    top: 320,
    backgroundColor: '#D8E6F5',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,  
    elevation: 11,
  },
  buttonContainer4:{
    position: 'absolute',
    width: 95,
    height: 81,
    left: 155,
    top: 320,
    backgroundColor: '#589AC6',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,  
    elevation: 11,
  },
  buttonContainer5:{
    position: 'absolute',
    width: 82,
    height: 178,
    left: 270,
    top: 220,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,  
    elevation: 11,
  },
 
});

export default Dashboard;

