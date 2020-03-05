import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

import NetInfo from '@react-native-community/netinfo';

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});

const App = () => {
  React.useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });

    // Unsubscribe
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.camera}>
      <RNCamera />
    </View>
  );
};

export default App;
