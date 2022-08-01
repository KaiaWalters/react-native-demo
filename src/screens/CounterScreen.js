import React, {useState} from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const CounterScreen = () => {
    //array destructuring 
    const [counter, setCounter] = useState(0)
    
    return (
        <View>
            <Text style={styles.header}>Counter</Text>
            <Button title='Increase' onPress={() => {
                setCounter(counter + 1) 
            }}/>
             <Button title='Decrease' onPress={() => {
                setCounter(counter - 1) 
            }}/>
            <Text>Current Count: {counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 80
    },
    subHeader: {
        fontSize: 50
    }
});

export default CounterScreen;