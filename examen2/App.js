import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { firebase } from "./firebaseConfig";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  ///inciio de sesion y registro
  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        navigation.replace("Home"); 
      })
      .catch(error => {
        Alert.alert("Error", error.message);
      });
  };

  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        navigation.replace("Home"); 
      })
      .catch(error => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={signIn} />
      <View style={{ marginTop: 10 }}>
        <Button title="Registrarse" onPress={signUp} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 32,
    textAlign: "center",
    letterSpacing: 1,
  },
  input: {
    width: "100%",
    maxWidth: 350,
    borderWidth: 1,
    borderColor: "#b2bec3",
    backgroundColor: "#f5f6fa",
    padding: 14,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    color: "#2d3436",
  },
  button: {
    width: "100%",
    maxWidth: 350,
    marginBottom: 12,
    borderRadius: 8,
    overflow: "hidden",
  },
});
