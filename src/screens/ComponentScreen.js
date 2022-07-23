import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentScreen = () => {
    const student = "Kaia Walters"
    
    return (
        <View>
            <Text style={styles.header}>Getting Started With React Native!</Text>
            <Text style={styles.subHeader}>My name is {student}</Text>
            <Text style={styles.subHeader}>You definitely want to hire me ~</Text>
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

export default ComponentScreen;