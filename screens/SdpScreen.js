import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function SdpScreen({ route, navigation }) {

  function handleHomePress(){
  navigation.navigate("Hdz")
}

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>SDP</Text>
      <Button title="go to the HDZ" 
      onPress={handleHomePress}
      color="#4169e1" 
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3131',
  },
   text: {
    color: 'white',
    fontSize: '24px',
    textAlign: 'center',
    paddingBottom: '5px'
  }
});
