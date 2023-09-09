import { View, Text } from "react-native";
import React from "react";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodo from "./Screens/AddTodo";
import { Wrapper } from "./ContextApi/Wrapper";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Wrapper>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddTodo" component={AddTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Wrapper>
  );
};

export default App;
