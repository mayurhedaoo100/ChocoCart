import React from "react";
import { View, Text, Button } from "react-native";
import ProductList from "../components/ProductList";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-gray-100">
      <Text className="text-2xl font-bold p-4">Welcome to ChocoCart</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
      <ProductList navigation={navigation} />
    </View>
  );
}
