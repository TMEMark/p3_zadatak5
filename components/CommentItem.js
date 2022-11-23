import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const CommentItem = (props) => {

return (
  <TouchableOpacity>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>
)

}

const styles = StyleSheet.create({
listItem:{
  padding: 20,
  margin: 10,
  borderColor: "black",
  borderWidth: 2
}

})

export default CommentItem;