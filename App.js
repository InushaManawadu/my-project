import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';

export default function App() {

  const [todos, setToDos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'go shopping', key: '3' },
  ])

  return (
    <View style={styles.container}>
      <Header/> 
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <Text> {item.text} </Text>
            )}
          />
        </View>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
