import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = ({ onAddPress }) => {

  const [inputValue, setInputValue] = useState('');

  const onChangeText = (inputValue) => {
    setInputValue(inputValue);
  };

  const onPress = () => {
    onAddPress(inputValue);
    setInputValue('');
  };

  return (
    <View style={ styles.inputContainer }>
      <TextInput
        placeholder="Course Goal"
        style = { styles.input }
        onChangeText = { onChangeText }
        value = { inputValue }
      />
      <Button 
        title = "ADD"
        onPress = { onPress } 
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;