import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import render from 'react-native-web/dist/cjs/exports/render';

const Button = (props) => {
  function constructor(props) {
    super(props)
  }
    return (
      <View>
          <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>{props.title}</Text>
          </TouchableOpacity>
      </View> 
    );
  };

const styles = StyleSheet.create({

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

export default Button;
