import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const ListItem = ({ title, onPress }) => {
  return (
    <Pressable onLongPress = { onPress }>
      <Text style = { styles.listItem }>
        { title }
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default ListItem;