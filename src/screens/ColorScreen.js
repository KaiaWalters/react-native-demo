import React, {useState} from 'react';
import { View, Button, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ColorScreen = () => {
    const [colors, setColors] = useState([])
    console.log(colors)
    return (
        <View>
            <Button title="Add a color" onPress={() => {
                setColors([...colors, randomRGB()])
            }}/>
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{height: 100, width: 100, backgroundColor:item}}></View>
                }}
            />
        </View>   
    )
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256 )

    return `rgb(${red}, ${green}, ${blue})`
}
export default ColorScreen