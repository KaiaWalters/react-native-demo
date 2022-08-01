import React from "react";
import {View} from 'react'
import ColorCounter from "../components/ColorCounter";

const ColorPicker = () => {
    return (
        <View>
            <ColorCounter color="Red"/>
            <ColorCounter color="Blue"/>
            <ColorCounter color="Green"/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ColorPicker; 