import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {useLogin} from '../context/LoginProvider';
import SignInScreen from '../views/SignInScreen/SignInScreen';
import Dashboard from '../views/Dashboard/Dashboard';
import OutForDelivery from '../views/Shipments/OutForDelivery';
import DeliveredShipment from '../views/Shipments/DeliveredShipment';
import Summary from '../views/Shipments/Summary';
import RescheduledShipment from '../views/Shipments/RescheduledShipment';
import Returns from '../views/Shipments/Returns';
import Collections from '../views/Collections/Collections';
import Settings from '../views/Settings/Settings';
import ChangePassword from '../views/Settings/ChangePassword';
import Profile from '../views/Settings/Profile';
import PrivacyPolicy from '../views/Settings/PrivacyPolicy';
import Help from '../views/Settings/Help';
import Terms from '../views/Settings/Terms';
import About from '../views/Settings/About';
import Forgot from '../views/Forgot Password/Forgot';
import ShipmentInfo from '../views/Information/ShipmentInfo';
import ShipmentDetails from '../views/Shipments/ShipmentDetails';
import QRScan from '../views/ScanPage/QRScan';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={[styles.menuContainer, {backgroundColor: '#102256'}]}>
      <View style={[styles.Cont, {flex: 1.3}]}>
        <View style={[styles.menu]}>
          <ImageBackground
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              position: 'absolute',
            }}
            source={require('../../assets/SideDrawer.png')}
          />
        </View>
        <View
          style={[
            styles.menu,
            {
              justifyContent: 'center',
              position: 'absolute',
              alignSelf: 'center',
              top: '20%',
            },
          ]}>
          <Image
            style={{
              resizeMode: 'contain',
              height: 130,
              width: 130,
              borderRadius: 100,
              overflow: 'hidden',
              borderWidth: 3,
              borderColor: 'white',
            }}
            source={require('../../assets/profile.jpg')}
          />
        </View>
      </View>
      <View style={[styles.menuItemsCard]}>
        <View style={[styles.menuCard]}>
          <DrawerItem
            label="Dashboard"
            labelStyle={[styles.NavPages]}
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
        </View>
        <View style={[styles.menuCard]}>
          <DrawerItem
            label="Collections"
            labelStyle={[styles.NavPages]}
            onPress={() => {
              props.navigation.navigate('Collections');
            }}
          />
        </View>
        <View style={[styles.menuCard]}>
          <DrawerItem
            label="Delivered Shipment"
            labelStyle={[styles.NavPages]}
            onPress={() => {
              props.navigation.navigate('DeliveredShipment');
            }}
          />
        </View>
        <View style={[styles.menuCard]}>
          <DrawerItem
            label="Out For Delivery"
            labelStyle={[styles.NavPages]}
            onPress={() => {
              props.navigation.navigate('OutForDelivery');
            }}
          />
        </View>
        <View style={[styles.menuCard]}>
          <DrawerItem
            label="Re-Scheduled"
            labelStyle={[styles.NavPages]}
            onPress={() => {
              props.navigation.navigate('RescheduledShipment');
            }}
          />
        </View>
        <View style={[styles.menuCard]}>
          <DrawerItem
            label="Returns"
            labelStyle={[styles.NavPages]}
            onPress={() => {
              props.navigation.navigate('Returns');
            }}
          />
        </View>
        <View style={[styles.menuCard]}>
          <DrawerItem
            label="Summary"
            labelStyle={[styles.NavPages]}
            onPress={() => {
              props.navigation.navigate('Summary');
            }}
          />
        </View>

        <View style={[styles.menuCard]}>
          <DrawerItem
            label="QR-Scan"
            labelStyle={[styles.NavPages]}
            onPress={() => {
              props.navigation.navigate('QRScan');
            }}
          />
        </View>
      </View>
    </View>
  );
}
const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        screenOptions={{headerShown: false}}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="OutForDelivery" component={OutForDelivery} />
        <Drawer.Screen name="DeliveredShipment" component={DeliveredShipment} />
        <Drawer.Screen name="Summary" component={Summary} />
        <Drawer.Screen
          name="RescheduledShipment"
          component={RescheduledShipment}
        />
        <Drawer.Screen name="Returns" component={Returns} />
        <Drawer.Screen name="Collections" component={Collections} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="QRScan" component={QRScan} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Support" component={Support} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="ChangePassword" component={ChangePassword} />
        <Drawer.Screen name="Terms" component={Terms} />
        <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Drawer.Screen name="ResetSuccess" component={ResetSuccess} />
        <Drawer.Screen name="ShipmentInfo" component={ShipmentInfo} />
        <Drawer.Screen name="ShipmentDetails" component={ShipmentDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Forgot" component={Forgot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Navigation = () => {
  const {isLoggedIn} = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuCard: {
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: -4,
    marginTop: -4,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  menuContainer: {
    flex: 1.4,
  },
  menu: {
    flex: 2,
  },
  NavPages: {
    color: '#9C9C9C',
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 1.0,
    paddingLeft: 10,
    borderRadius: 10,
    padding: 5,
  },
  menuItemsCard: {
    flex: 3,
  },
  Cont: {},
});
export default Navigation;
