import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import BottomNavigationBar from '../../shared/BottomNavigationBar';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRScan = () => {

  const [scan, setScan] = useState(false)
  const [result, setResult] = useState()

  onSuccess = (e) => {
    setResult(e.data)
    setScan(false)
  }

  startScan = () => {
    setScan(true)
    setResult()
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            { result &&
              <View style={styles.sectionContainer}>
                <Text style={styles.centerText}>{result}</Text>
              </View>
            }
            { !scan &&
              <View style={styles.sectionContainer}>
                <Button
                  title="Scan Here"
                  color="rgb(0, 30, 60)"
                  onPress={startScan}
                  style={{marginTop: 10}}
                />
              </View>
            }
            { scan &&
              <View style={styles.sectionContainer}>
                <QRCodeScanner
                  reactivate={true}
                  showMarker={true}
                  ref={(node) => { scanner = node }}
                  onRead={onSuccess}
                  topContent={
                    <Text style={styles.centerText}>
                      Scan your QRCode!
                    </Text>
                  }
                  bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(false)}>
                      <Text style={styles.buttonText}>Cancel Scan</Text>
                    </TouchableOpacity>
                  }
                />
              </View>
            }
          </View>
          <View style={styles.nav}><BottomNavigationBar /></View>
        </ScrollView>
        
      </SafeAreaView>
    </>
  );
  
  };
  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
      
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 100,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#fff',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
      padding: 16,
    },
    nav:{
      bottom:0,
      backgroundColor: "#f56a56",
      marginTop: 608
    }
  });

  export default QRScan;