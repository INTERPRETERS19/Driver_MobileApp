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