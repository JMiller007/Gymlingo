import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const exercises = [
  { id: '1', name: 'Push Ups', image: require('../assets/Push ups.png') },
  { id: '2', name: 'Sit Ups', image: require('../assets/Sit ups.png') },
  { id: '3', name: 'Jumping Jacks', image: require('../assets/Jumping Jacks.png') },
  { id: '4', name: 'Running', image: require('../assets/Running.png') },
  { id: '5', name: 'Rest', image: require('../assets/Rest.png') },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Exercise', { exercise: item })}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  item: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
  },
});

export default HomeScreen;
