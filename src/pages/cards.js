import React, { Component } from "react";
import { ActivityIndicator, ImageBackground } from "react-native";
import api from "../services/api";
import {
  Container,
  List,
  Card,
  CardText,
  ProfileButton,
  ProfileButtonText,
  AddButton,
  AddButtonText
} from "../styles";

export default class Cards extends Component {
  state = {
    characters: [],
    loading: false,
    nextPage: 1,
  };

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = async () => {
    if (this.state.loading) return;

    this.setState({ loading: true });

    try {
      const response = await api.get(`people/?page=${this.state.nextPage}`);
      const newCharacters = response.data.results.map(char => ({
        ...char,
        id: char.url.split("/")[5]
      }));

      console.log("Characters loaded:", newCharacters);

      this.setState({
        characters: [...this.state.characters, ...newCharacters],
        nextPage: this.state.nextPage + 1,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      alert("Falha ao carregar os personagens. Tente novamente.");
      this.setState({ loading: false });
    }
  };

  render() {
    const { characters, loading } = this.state;

    return (
      <Container>
        <ImageBackground source={require("../../assets/wall.png")} style={{ flex: 1 }}>
          <List
            data={characters}
            keyExtractor={(character) => character.id.toString()}
            renderItem={({ item }) => (
              <Card>
                <CardText>{item.name}</CardText>
                <ProfileButton onPress={() => this.props.navigation.navigate("cardDetails", { character: item })}>
                  <ProfileButtonText>Ver mais detalhes</ProfileButtonText>
                </ProfileButton>
              </Card>
            )}
          />

          <AddButton loading={loading} onPress={this.loadCharacters}>
            {loading ? <ActivityIndicator color="#000" /> : <AddButtonText>Mais personagens</AddButtonText>}
          </AddButton>
        </ImageBackground>
      </Container>
    );
  }
}