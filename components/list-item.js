import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ListItem = ({ title }) => {
  return (
    <Text style = { styles.listItem }>
      { title }
    </Text>
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