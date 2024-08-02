import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AuthContext } from '../utils/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    // Here, we'd call the signIn method from our AuthContext
    // which should internally use AuthService to authenticate the user
    // For now, let's just log the credentials
    console.log(email, password);
    signIn({ email, password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Log In
      </Button>
      <Text 
        onPress={() => navigation.navigate('SignUpScreen')} 
        style={styles.link}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    padding: 5,
  },
  link: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginScreen;
