import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clearList = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <View style={styles.buttonContainer}>
        <Button onPress={addItem} title="ADD" />
        <Button onPress={clearList} title="CLEAR" />
      </View>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "blue"
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});