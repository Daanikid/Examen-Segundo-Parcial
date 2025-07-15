import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { firebase } from './firebaseConfig';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      navigation.replace('Login'); 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
});
