import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await AsyncStorage.getItem("user");
    if (!user) {
      alert("Nenhum Padawan cadastrado, encontrar eu consegui.");
      return;
    }
    const userJson = JSON.parse(user);
    if (userJson.email === email && userJson.password === password) {
      navigation.navigate("cards");
    } else {
      alert("Suas credenciais, erradas estão!");
    }
  };

  const handleCadastro = () => {
    navigation.navigate("cadastro");
  };

  return (
<ImageBackground source={{uri: 'https://wallpapercave.com/wp/wp2724422.jpg'}} style={styles.container}>
  <Text style={styles.title}>Olá Padawan</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail, digite aqui"
        placeholderTextColor="#4dff4d"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Sua senha, colocar você deve"
        placeholderTextColor="#4dff4d"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
</ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#4dff4d",
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(77, 255, 77, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#4d94ff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
    color: "#4dff4d",
  },
  button: {
    backgroundColor: "#4d94ff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Login;