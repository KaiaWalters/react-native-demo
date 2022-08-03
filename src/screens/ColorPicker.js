import React, {useState} from "react";
import {View} from 'react-native'
import ColorCounter from "../components/ColorCounter";

const ColorPicker = () => {
    const [red, setRed] = useState(0);
    const [green , setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const COLOR_INCREMENT = 20

    const setColor = (color) => {
        let change = COLOR_INCREMENT
        if(color === `red`) {
            if(red + change > 255 || red + change < 0) {
                return; 
            }else {
                setRed(red + change);
            }
        } else if (color === 'green') {
            if(green + change > 255 || green + change < 0) {
                return; 
            }else {
                setGreen(green + change);
            }
        } else if(color === 'blue') {
                if(blue + change > 255 || blue + change < 0) {
                    return;
                }else {
                    setBlue(blue + change)
                }
            }
        }

    console.log(red, blue, green)
    return (
        <View>
            <ColorCounter 
            onIncrease={() => setColor('red')}
            onDecrease={() => setColor('red')} 
            color="Red"/>
            <ColorCounter 
             onIncrease={() => setColor('green')}
             onDecrease={() => setColor('green')} 
            color="Green"/>
            <ColorCounter
             onIncrease={() => setColor('blue')}
             onDecrease={() => setColor('blue')} 
            color="Blue"/>

            <View
            style={{
                height:150, 
                width:150, 
                backgroundColor:`rgb(${red}, ${green}, ${blue})`
            }}
            >
            </View>
        </View>
    );
};

export default ColorPicker;