import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

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
          style = { styles.input }
          onChangeText = { onChangeText }
          value = { inputValue }
        />
        <Button 
          title = "ADD"
          onPress = { onAddPress } 
        />
      </View>
      <FlatList 
        keyExtractor = { (item, index) => String(index) }
        data = { goalsList }
        renderItem = { ({ item }) => {
          return (
          <Text style = { styles.listItem }>
            { item }
          </Text>
          );
        } }
        style = { styles.list }
        showsVerticalScrollIndicator = { false } 
      />
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
  list: {
    marginTop: 10,
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
