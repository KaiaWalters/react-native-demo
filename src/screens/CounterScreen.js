import React from "react";
import {Text, StyleSheet, View} from "react-native";

const CounterScreen = () => {
    const count = 0
    const countUp = () => {
        this.count++
    }
    const countDown = () => {
        this.count--
    }
    
    return (
        <View>
            <Text style={styles.header}>Counter</Text>
            <Button title='Increase' onPress='countUp()'/>
            <Button title='Decrease' onPress='countDown()'/>
            <Text>Current Count: {count}</Text>
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