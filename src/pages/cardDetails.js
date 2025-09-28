import React, { Component } from "react";
import { ImageBackground } from "react-native";
import {
  Container,
  Header,
  CardDetail,
  DetailText,
  DetailTitle
} from "../styles";

export default class CardDetails extends Component {
  render() {
    const { route } = this.props;
    const { character } = route.params;

    return (
      <Container>
        <ImageBackground source={require("../../assets/wall.png")} style={{ flex: 1 }}>
          <Header>
            <DetailTitle>{character.name}</DetailTitle>
          </Header>

          <CardDetail>
            <DetailText>Altura: {character.height} cm</DetailText>
            <DetailText>Peso: {character.mass} kg</DetailText>
            <DetailText>Cor do cabelo: {character.hair_color}</DetailText>
            <DetailText>Cor da pele: {character.skin_color}</DetailText>
            <DetailText>Cor dos olhos: {character.eye_color}</DetailText>
            <DetailText>Ano de nascimento: {character.birth_year}</DetailText>
            <DetailText>Gênero: {character.gender}</DetailText>
          </CardDetail>
        </ImageBackground>
      </Container>
    );
  }
}
