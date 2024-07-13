import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import styles from '../styles/styles';

const { width: screenWidth } = Dimensions.get('window');

const CharacterListScreen = ({ route, navigation }) => {
  const { characters } = route.params;

  const handlePress = (character) => {
    navigation.navigate('CharacterDetails', { character });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[localStyles.itemContainer, { width: screenWidth - 20 }]} onPress={() => handlePress(item)}>
      <Image source={{ uri: item.imageUrl }} style={localStyles.image} />
      <View style={localStyles.textContainer}>
        <Text style={localStyles.name}>{item.fullName}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={localStyles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 10,
    alignItems: 'flex-start', 
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default CharacterListScreen;
