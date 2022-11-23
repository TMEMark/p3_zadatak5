import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function SettingsScreen({ route, navigation }) {

function handleHomePress(){
  navigation.navigate("Home")
}

  return (
    <View style={styles.screen}>
      <Text>SETTING SCREEN</Text>
      <Button 
      title="GO TO THE HOME SCREEN"
      onPress={handleHomePress}
       />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});
