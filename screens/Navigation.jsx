import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { FullPostScreen } from "./FullPostScreen";

const Stack = createNativeStackNavigator();

// <Routes>...</Routes> => Stack.Navigator

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "News" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPostScreen}
          options={{ title: "Article" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
