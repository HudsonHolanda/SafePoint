import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PasswordGenerator = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 12;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
  };

  const savePassword = async () => {
    if (password) {
      try {
        const savedPasswords = JSON.parse(await AsyncStorage.getItem('savedPasswords')) || [];
        savedPasswords.push(password);
        await AsyncStorage.setItem('savedPasswords', JSON.stringify(savedPasswords));
        Alert.alert('Senha salva com sucesso!');
        setPassword('');
      } catch (error) {
        Alert.alert('Erro ao salvar a senha');
      }
    } else {
      Alert.alert('Por favor, gere uma senha antes de salvar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gerador de Senhas</Text>
      <Text style={styles.password}>{password || 'Clique no botão para gerar uma senha!'}</Text>
      <Button title="Gerar Senha" onPress={generatePassword} />
      <Button title="Salvar Senha" onPress={savePassword} disabled={!password} />
      <Button title="Ver Senhas Salvas" onPress={() => navigation.navigate('Senhas Salvas')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  password: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default PasswordGenerator;
