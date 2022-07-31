import React from 'react';
import { Text, StyleSheet, View, Image} from 'react-native';


const ImageDetail = (props) => {
  return ( 
    <View>  
        <Image class={styles.image} source={props.source}/>  
        <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 10,
    height: 10,
  }
});

export default ImageDetail;
