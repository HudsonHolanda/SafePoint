import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      console.log('Senhas não coincidem');
      return;
    }
    console.log('Cadastro realizado com:', username, email, password);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/favicon.ico')}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#5B8EE0"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#5B8EE0"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#5B8EE0"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          placeholderTextColor="#5B8EE0"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Já tem uma conta?{' '}
        <Text style={styles.link} onPress={navigation.navigate('login.jsx')}>
          Faça login
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    borderBottomColor: '#5B8EE0',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  input: {
    height: 40,
    color: '#000000',
    paddingVertical: 0,
  },
  button: {
    backgroundColor: '#009FE1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  signupText: {
    textAlign: 'center',
    color: '#101EE0',
  },
  link: {
    color: '#009FE1',
  },
});

export default SignupScreen;
