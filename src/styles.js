import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { FlatList, Text, View } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const Card = styled(View)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  border: 1px solid #4d94ff;
`;

export const CardText = styled(Text)`
  color: #4dff4d;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #4d94ff;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ProfileButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;

export const AddButton = styled(RectButton)`
  margin: 20px;
  padding: 14px;
  border-radius: 4px;
  background-color: #4dff4d;
  align-items: center;
  justify-content: center;
`;

export const AddButtonText = styled(Text)`
  color: #000;
  font-weight: bold;
`;

export const Header = styled(View)`
  padding: 16px;
  align-items: center;
`;

export const DetailTitle = styled(Text)`
  color: #4dff4d;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const CardDetail = styled(View)`
  margin: 16px;
  padding: 16px;
  border: 1px solid #4d94ff;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const DetailText = styled(Text)`
  color: #4dff4d;
  font-size: 16px;
  margin-bottom: 6px;
`;
