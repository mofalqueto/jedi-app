import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";

export default class Cadastro extends Component {
  state = {
    nome: "",
    telefone: "",
    cpf: "",
    email: "",
    curso: "",
    password: "",
  };

  handleCadastro = async () => {
    const { nome, telefone, cpf, email, curso, password } = this.state;
    if (!nome || !telefone || !cpf || !email || !curso || !password) {
      alert("Todos os campos, preencher você deve!");
      return;
    }
    const user = {
      nome,
      telefone,
      cpf,
      email,
      curso,
      password
    };

    await AsyncStorage.setItem("user", JSON.stringify(user));
    alert("Jovem Padawan, cadastrado com sucesso você foi!");
    this.props.navigation.navigate("login");
  };
  render() {
    return (
      <ImageBackground source={{uri: 'https://wallpapercave.com/wp/wp2724422.jpg'}} style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Seu nome, jovem Padawan"
          placeholderTextColor="#4dff4d"
          value={this.state.nome}
          onChangeText={(nome) => this.setState({ nome })}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu telefone"
          placeholderTextColor="#4dff4d"
          value={this.state.telefone}
          onChangeText={(telefone) => this.setState({ telefone })}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu CPF"
          placeholderTextColor="#4dff4d"
          value={this.state.cpf}
          onChangeText={(cpf) => this.setState({ cpf })}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#4dff4d"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu curso"
          placeholderTextColor="#4dff4d"
          value={this.state.curso}
          onChangeText={(curso) => this.setState({ curso })}
        />
        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          placeholderTextColor="#4dff4d"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleCadastro}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
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
      width: "80%",
      alignItems: "center",
      marginVertical: 10,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });