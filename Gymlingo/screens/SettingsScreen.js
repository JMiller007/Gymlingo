import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [accountName, setAccountName] = useState('John Doe');
  const [language, setLanguage] = useState('en');

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#333' : '#f8f8f8' }]}>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#000' }]}>Settings Page</Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>Appearance</Text>
        <View style={styles.row}>
          <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#000' }]}>Dark Mode</Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>Notifications</Text>
        <View style={styles.row}>
          <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#000' }]}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>Account Information</Text>
        <TextInput
          style={[styles.input, { backgroundColor: theme === 'dark' ? '#555' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }]}
          value={accountName}
          onChangeText={setAccountName}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>Language</Text>
        <Picker
          selectedValue={language}
          style={[styles.picker, { color: theme === 'dark' ? '#fff' : '#000' }]}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="French" value="fr" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default SettingsScreen;
