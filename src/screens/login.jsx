import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login realizado com:', email, password);
    // lógica de autenticação...
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Não tem uma conta? navigation.navigate('cadastro.jsx') style=
        {styles.link}
        Cadastre-se
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

export default LoginScreen;
