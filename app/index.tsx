import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const handleLogin = () => {
    console.log("login bn pressed");
  };

  const handleRegister = () => {
    console.log("registration bn pressed ");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        
      </View>

      <Text style={styles.title}>Make your choose </Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
 
  title: {
    fontSize: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    width: "60%",
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#000000",
  },
  buttonText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
});
