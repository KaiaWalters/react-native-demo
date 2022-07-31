import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = ({navigation}) => {
  return ( 
   <View style={styles.container}>
      <Text style={styles.text}>MemoMap</Text>
      <View style={styles.navBar}>
        <Button title="Your Shops" location="Images"/>
        <Button title="Item Lists" location="List"/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 30
  },
  navBar: {
    marginTop:20,
    flexDirection:'row'
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#81CACF",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    textAlign: "center",
  }, 
  buttonText: {
    color: '#355764'
  }

});

export default HomeScreen;
