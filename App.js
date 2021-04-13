import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from './components/list-item';
import GoalInput from './components/goal-input';

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
      <GoalInput 
        inputValue = { inputValue }
        onChangeText = { onChangeText }
        onAddPress = { onAddPress }
      />
      <FlatList 
        keyExtractor = { (item, index) => String(index) }
        data = { goalsList }
        renderItem = { ({ item }) => <ListItem title = { item }/> }
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
  list: {
    marginTop: 10,
  },
});

export default App;
