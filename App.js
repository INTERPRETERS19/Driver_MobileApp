import React from 'react';
 import {SafeAreaView, StyleSheet, Text} from 'react-native';
 import Navigation from './src/navigation';
 import SplashScreen from  "react-native-splash-screen";
 
 const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
   return (
     <SafeAreaView style={styles.root}>
       <Navigation />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   root: {
     flex: 1,
     backgroundColor: '#232323',
   },
 });
 
 export default App;