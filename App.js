import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from './components/list-item';
import GoalInput from './components/goal-input';

const App = () => {
  const [goalsList, setGoalsList] = useState([]);

  const onAddPress = (inputValue) => {
    setGoalsList(goalsList => [...goalsList, inputValue]);
  };

  const deleteListItem = (index) => {
    setGoalsList(goalsList => [
      ...goalsList.slice(0, index), 
      ...goalsList.slice(index + 1)
    ]);
  };

  return (
    <View style={ styles.container }>
      <GoalInput onAddPress = { onAddPress } />
      <FlatList 
        keyExtractor = { (item, index) => String(index) }
        data = { goalsList }
        renderItem = { ({ item, index }) => (
          <ListItem 
            title = { item } 
            onPress = { () => deleteListItem(index) } /> 
        )}
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
