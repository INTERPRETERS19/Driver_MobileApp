import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import DashButtons from '../../components/DashButtons';
import PieChart from 'react-native-pie-chart';

const Dashboard = () => {
  const navigation = useNavigation();
  const widthAndHeight = 180;
  const series = [12, 10, 15, 28];
  const sliceColor = ['#C3E4F5', '#7E7D7D', '#000','#213571'];
//colors
//#C3E4F5
//#213571
//#000000
//#7E7D7D
//colors
  const onMenuPressed = () => {
    navigation.navigate('Settings');
  };
  const onSettingsPressed = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.root}>

    <ImageBackground 
    source={require('../../../assets/img1.jpg')}
    style={{   width: '100%',
        height: '100%'}}>
 
         <View style={[styles.topbar ]}>
             <Icon name="md-menu-sharp" size={40} color="#000000"   onPress={onMenuPressed} />
             <Icon name="settings-sharp" size={35} color="#000000"   onPress={onSettingsPressed}/>
         </View>

         <View style={[styles.welcomeBar]}>
             <Text style={styles.welcome}>Welcome</Text>
             <Text style={styles.name}>Eren Jeager,</Text>
         </View>

         <View style={[styles.dashboard]}>
             <Text style={styles.dashboardTitle}>Dashboard</Text>
         </View>
       
        <View style={[styles.infoPanel]}>
            <View style={[styles.infoPanelCol]}>
                <DashButtons
                  text="Delivered Shipments" 
                  onPress={onMenuPressed}
                  type = "1"     
                />
                <DashButtons
                     text="Re-Scheduled Shipments" 
                  onPress={onMenuPressed}
                  type = "3"     
                />
        
            </View>

            <View style={[styles.infoPanelCol]}>
                <DashButtons
                  text="Pending Deliveries"
                  onPress={onSettingsPressed}
                  type="2"
                />
                <DashButtons
                  text="Return Shipments"
                  onPress={onSettingsPressed}
                  type="4"
                />
            </View>

            <View style={[styles.infoPanelCol]}>
                <DashButtons
                  text="Collected COD Amount"
                  onPress={onSettingsPressed}
                  type="5"
                />
            </View>

        </View>


        <View style={[styles.pieChartPanel]}>
        <View style = {[styles.Pie1]}>
             <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.45}
                coverFill={'#FFF'}
              />
              </View>
            <View style = {[styles.Pie]}>
              <Text style={styles.PieName}><Icon name="square" size={15} color="#7E7D7D"/> Delivered Shipments</Text>
              <Text style={styles.PieName}><Icon name="square" size={15} color="#213571"/> Pending Deliveries</Text>
              <Text style={styles.PieName}><Icon name="square" size={15} color="#C3E4F5"/> Re-Scheduled</Text>
              <Text style={styles.PieName}><Icon name="square" size={15} color="#000000"/> Return Shipments</Text>
            </View>
           
        </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  topbar: {
    flex: 0.8,
    padding:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:0,
  },
  welcomeBar: {
    flex: 0.5,
    paddingLeft:20,
    paddingBottom:15,
  },
  welcome: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#2566AD',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 26,
    color: '#000000',
  },
  dashboard: {
    flex: 0.5,
  },
  dashboardTitle: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  infoPanel: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#D1D1D1',
    borderTopLeftRadius: 40,
    padding: 15,
  },
  infoPanelCol: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  Pie:{
    flex:1,
    padding:15,
    paddingVertical:50,
  },
  Pie1:{
    flex:1,
  },
  PieName:{
    color: '#000000',
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    lineHeight: 20,
    paddingLeft:20,
    textAlign: "left",
  },
  pieChartPanel: {
    flex: 2.5,
    padding:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    },
    
});

export default Dashboard;