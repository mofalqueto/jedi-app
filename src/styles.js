import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

// Estilos gerais
export const Container = styled.View`
  flex: 1;
`;

// Estilos da tela de Cards
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const Card = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  border: 1px solid #4d94ff;
`;

export const CardText = styled.Text`
  font-size: 18px;
  color: #4dff4d;
  font-weight: bold;
  text-shadow-color: 'rgba(77, 255, 77, 0.75)';
  text-shadow-offset: {width: -1, height: 1};
  text-shadow-radius: 10;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #4d94ff;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const AddButton = styled(RectButton)`
  background: #4dff4d;
  justify-content: center;
  align-items: center;
  height: 50px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const AddButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
`;

// Estilos da tela de Detalhes
export const Header = styled.View`
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const DetailTitle = styled.Text`
  font-size: 24px;
  color: #4dff4d;
  font-weight: bold;
  text-shadow-color: 'rgba(77, 255, 77, 0.75)';
  text-shadow-offset: {width: -1, height: 1};
  text-shadow-radius: 10;
`;

export const CardDetail = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 20px;
  margin: 0 30px;
  border: 1px solid #4d94ff;
`;

export const DetailText = styled.Text`
  font-size: 16px;
  color: #fff;
  line-height: 24px;
`;