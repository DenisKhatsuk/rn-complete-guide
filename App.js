import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <View style = { {paddingTop: 50, paddingHorizontal: 20} }>
      <View style = {
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }
      }>
        <TextInput 
          placeholder = "Course Goal"
          style = { 
            {
              width: '80%',
              padding: 10,
              borderColor: 'black',
              borderWidth: 1,
            } 
          }
        />
        <Button title = "ADD" />
      </View>
      <View>
        <Text>Body!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
