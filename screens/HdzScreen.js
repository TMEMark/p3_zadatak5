import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function HdzScreen({ route, navigation }) {

function handleSettingsPress(){
  navigation.navigate("SdpScreen")
}

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>HDZ</Text>
      <Button title="go to the SDP"
        onPress={handleSettingsPress}
         color="#FF3131"     
       />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#4169e1',
  },
  text: {
    color: 'white',
    fontSize: '24px',
    textAlign: 'center',
    paddingBottom: '5px'
  }
});
