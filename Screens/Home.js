import { View, Text, StatusBar, FlatList } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Store } from "../ContextApi/Wrapper";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const nav = useNavigation();
  const { todo, setTodo } = useContext(Store);
  console.log(todo);

  const handleDelete = (item) => {
    setTodo(todo.filter((value, index) => value != item));
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        gap: 20,
      }}
    >
      <Text style={{ fontWeight: "300", fontSize: 27 }}>Your TODO'S HERE</Text>
      {/* ///RETRIEVED DATA */}

      <View style={{ flex: 0.95 }}>
        <FlatList
          data={todo}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                nav.navigate("AddTodo", { item });
              }}
              activeOpacity={0.8}
              style={{
                backgroundColor: "black",
                marginBottom: 10,
                height: 50,
                justifyContent: "space-between",
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 17, fontWeight: "300" }}>
                {item}
              </Text>
              <MaterialIcons
                onPress={() => {
                  handleDelete(item);
                }}
                name="delete-outline"
                size={27}
                color="white"
              />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* ///RETRIEVED DATA */}

      <TouchableOpacity
        onPress={() => {
          nav.navigate("AddTodo");
        }}
        activeOpacity={0.8}
        style={{
          backgroundColor: "black",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "400", fontSize: 17 }}>
          ADD TODOS
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
