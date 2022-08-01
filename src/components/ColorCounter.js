import React from "react";
import {View, Text, StyleSheet, Button} from 'React'

const ColorCounter = () => {
    return <View>
        <Text>Color Picker</Text>
        <Button title="Increase Red"/>
        <Button title="Decrease Red"/>
    </View> 
  
};

const styles = StyleSheet.create({});

export default ColorCounter