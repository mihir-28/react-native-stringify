import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const CustomText = (props) => {
    const text = props.text.split(' ');
    return <Text>{text.map(text => {
      if (text.startsWith('@') || text.startsWith('#')) {
        return <Text style={{ color: 'blue' }}>{text} </Text>;
      }
      return <Text style={{ color: 'black' }}>{text} </Text>;
    })}</Text>;
}


export default function App() {
  return (
    <View style={styles.container}>
       <CustomText text="this is a @sample #text"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  }
});
