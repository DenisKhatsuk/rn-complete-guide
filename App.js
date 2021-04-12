import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const onChangeText = (inputValue) => {
    setInputValue(inputValue);
  };

  const onAddPress = () => {
    setGoalsList(goalsList => [...goalsList, inputValue]);
    setInputValue('');
  };

  return (
    <View style={ styles.container }>
      <View style={ styles.inputContainer }>
        <TextInput
          placeholder="Course Goal"
          style={ styles.input }
          onChangeText = { onChangeText }
          value = { inputValue }
        />
        <Button 
          title = "ADD"
          onPress = { onAddPress } 
        />
      </View>
      <View>
        { goalsList.map((item,  idx) => {
          return (
            <Text 
              key = { idx }
              style = { styles.listItem }>
                { item }
            </Text>
          );
        }) }
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
