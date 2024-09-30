import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedPasswords = () => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const loadPasswords = async () => {
      try {
        const savedPasswords = JSON.parse(await AsyncStorage.getItem('savedPasswords')) || [];
        setPasswords(savedPasswords);
      } catch (error) {
        console.error('Erro ao carregar senhas', error);
      }
    };

    loadPasswords();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.passwordItem}>
      <Text style={styles.passwordText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Senhas Salvas</Text>
      <FlatList
        data={passwords}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
    width: '100%',
  },
  passwordItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  passwordText: {
    fontSize: 16,
  },
});

export default SavedPasswords;
