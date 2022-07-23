import React from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = () => {
 
  return ( 
   <View>
      <Text style={styles.text}>I am the captain now</Text>
      <Button 
      onPress={() => console.log("hey there")}
      title="Components Demo"/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
