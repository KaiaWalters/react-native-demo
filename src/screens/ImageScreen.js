import React from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return ( 
    <View>      
        <ImageDetail title="forest" source={require('../assets/forest.jpg')}/>
        <ImageDetail title="beach" source={require('../assets/beach.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
