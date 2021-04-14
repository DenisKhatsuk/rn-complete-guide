import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = ({ onAddPress, onCancel, visible }) => {

  const [inputValue, setInputValue] = useState('');

  const onChangeText = (inputValue) => {
    setInputValue(inputValue);
  };

  const onPress = () => {
    onAddPress(inputValue);
    setInputValue('');
  };

  return (
    <Modal 
      visible = { visible }
      animationType = "slide"
    >
      <View style={ styles.inputContainer }>
        <TextInput
          placeholder="Course Goal"
          style = { styles.input }
          onChangeText = { onChangeText }
          value = { inputValue }
        />
        <View style = { styles.buttonsContainer }>
          <View style = { styles.goalButton }>
            <Button 
              title = "ADD"
              onPress = { onPress } 
            />
          </View>
          <View style = { styles.goalButton }>
            <Button 
              title = "CANCEL"
              color = "red"
              onPress = { onCancel } 
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '70%',
  },
  goalButton: {
    width: '40%',
  },
});

export default GoalInput;