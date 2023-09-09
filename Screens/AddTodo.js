import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Store } from "../ContextApi/Wrapper";
import { Keyboard } from "react-native";
import { Alert } from "react-native";

const AddTodo = ({ route }) => {
  const receivedData = route.params?.item;
  console.log(receivedData, "Im received data");
  const { todo, setTodo } = useContext(Store);
  console.log(todo);
  const nav = useNavigation();
  const [inputData, setinputData] = useState(receivedData && receivedData);

  const handleSubmit = () => {
    if (inputData) {
      setTodo([...todo, inputData]);
      setinputData("");
      Keyboard.dismiss();
      nav.goBack();
    } else {
      Alert.alert("Please fill the Todo");
    }
  };

  const handleUpdate = () => {
    const duplicateStore = [...todo];
    const receivedDataIndex = todo.findIndex((value) => value === receivedData);
    duplicateStore[receivedDataIndex] = inputData;
    setTodo(duplicateStore);
    Keyboard.dismiss();
    nav.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, gap: 20 }}>
      <Text style={{ fontWeight: "300", fontSize: 27 }}>
        ADD YOUR TODO'S NOW
      </Text>

      <View
        style={{
          flex: 0.7,

          justifyContent: "center",
          gap: 15,
        }}
      >
        <Text style={{ fontWeight: "300", fontSize: 20 }}>Enter Task</Text>
        <TextInput
          value={inputData}
          onChangeText={(value) => {
            setinputData(value);
          }}
          selectionColor={"black"}
          style={{ padding: 10, borderWidth: 1, borderColor: "gray" }}
          placeholder="Enter TODO here"
        />
        <TouchableOpacity
          onPress={() => {
            receivedData ? handleUpdate() : handleSubmit();
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: "black",
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "400", fontSize: 17 }}>
            {receivedData ? "Update Todo" : "Submit Todo"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
