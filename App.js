// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button,SafeAreaView } from 'react-native';
// import BarcodeScanner from 'react-native-scan-barcode';
//  import Navigation from './src/navigation';
//  import SplashScreen from  "react-native-splash-screen";

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const [text, setText] = useState('Not yet scanned')
//   React.useEffect(() => {
//     SplashScreen.hide();
//   });
//   const askForCameraPermission = () => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })()
//   }

//   // Request Camera Permission
//   useEffect(() => {
//     askForCameraPermission();
//   }, []);

//   // What happens when we scan the bar code
//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     setText(data)
//     console.log('Type: ' + type + '\nData: ' + data)
//   };

//   // Check permissions and return the screens
//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>

//         <Text>Requesting for camera permission</Text>
//       </View>)
//   }
//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text style={{ margin: 10 }}>No access to camera</Text>
//         <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
//       </View>)
//   }

//   // Return the View
//   return (
//     <SafeAreaView>
//       <Navigation />

//     <Navigation />
//     <View style={styles.container}>
//       <View style={styles.barcodebox}>
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={{ height: 400, width: 400 }} />
//       </View>
//       <Text style={styles.maintext}>{text}</Text>

//       {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
//     </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   maintext: {
//     fontSize: 16,
//     margin: 20,
//   },
//   barcodebox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 300,
//     width: 300,
//     overflow: 'hidden',
//     borderRadius: 30,
//     backgroundColor: 'tomato'
//   }
// });
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen';
import LoginProvider from './src/context/LoginProvider';
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <SafeAreaView style={styles.root}>
      <LoginProvider>
        <Navigation />
      </LoginProvider>
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
