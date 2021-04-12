import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.inputContainer }>
        <TextInput
          placeholder="Course Goal"
          style={ styles.input }
        />
        <Button title="ADD" />
      </View>
      <View>
        <Text>Body!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    paddingTop: 50, 
    paddingHorizontal: 20 
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
