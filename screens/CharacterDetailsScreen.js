import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import styles from '../styles/styles';

const CharacterDetailsScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView contentContainerStyle={localStyles.container}>
      <View style={localStyles.headerContainer}>
        <Image source={{ uri: character.imageUrl }} style={localStyles.image} />
        <Text style={localStyles.name}>{character.fullName}</Text>
        <Text style={localStyles.title}>{character.title}</Text>
      </View>
      <View style={localStyles.detailsContainer}>
        <Text style={localStyles.detailTitle}>ID  : <Text style={localStyles.detailText}>{character.id}</Text></Text>
        {/* <Text style={localStyles.detailText}>{character.id}</Text> */}
        <Text style={localStyles.detailTitle}>First Name  :  <Text style={localStyles.detailText}>{character.firstName}</Text></Text>
        
        <Text style={localStyles.detailTitle}>Last Name  :  <Text style={localStyles.detailText}>{character.lastName}</Text></Text>
        
        <Text style={localStyles.detailTitle}>Full Name  :  <Text style={localStyles.detailText}>{character.fullName}</Text></Text>
        
        <Text style={localStyles.detailTitle}>Title  :  <Text style={localStyles.detailText}>{character.title}</Text></Text>
        {/* <Text style={localStyles.detailTitle}>Family:  <Text style={localStyles.family}>{character.culture}</Text></Text> */}
        <Text style={localStyles.detailTitle}>Family  :   <Text style={localStyles.detailText}>{character.family}</Text></Text>
        {/* <Text style={localStyles.detailText}>{character.family}</Text> */}
        <Text style={localStyles.detailTitle}>Image  :   <Text style={localStyles.detailText}>{character.image}</Text></Text>
      </View>
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 15,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 15,
  },
});

export default CharacterDetailsScreen;
