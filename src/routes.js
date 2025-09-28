import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Cards from "./pages/cards";
import CardDetails from "./pages/cardDetails";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#4dff4d", // Verde Jedi
            textShadowColor: "rgba(77, 255, 77, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          },
          headerTintColor: "#4d94ff", // Azul Jedi
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Efeito de transição
        }}
      >
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "QUE A FORÇA ESTEJA COM VOCÊ",
          }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: "SEU CADASTRO, FAZER VOCÊ DEVE",
          }}
        />
        <Stack.Screen
          name="cards"
          component={Cards}
          options={{
            title: "PERSONAGENS",
          }}
        />
        <Stack.Screen
          name="cardDetails"
          component={CardDetails}
          options={{
            title: "DETALHES, MAIS VOCÊ VERÁ",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
