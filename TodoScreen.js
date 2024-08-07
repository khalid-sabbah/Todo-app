import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>
      
      <TextInput
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
      />
      <Button title="Add Todo"  />
      
      <View style={styles.divider} />

      <View style={styles.filterContainer}>
        <Button title="All" onPress={() => {}} color='blue' />
        <Button title="Active" onPress={() => {}} color='gray' />
        <Button title="Done" onPress={() => {}} color='gray' />
      </View>

      <FlatList
        data={[]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoTitle}>Sample Todo Title</Text>
            <Text>Sample Todo Description</Text>
            <Text>active</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  todoItem: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TodoScreen;
