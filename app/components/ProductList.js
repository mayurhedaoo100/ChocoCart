import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const products = [
  { id: 1, name: "Chocolate Bar", price: "$5", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Choco Cookies", price: "$3", image: "https://via.placeholder.com/150" },
];

export default function ProductList({ navigation }) {
  return (
    <View className="p-4">
      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          onPress={() => navigation.navigate("Product", { product })}
          className="flex-row bg-white p-4 mb-4 rounded-lg shadow-lg"
        >
          <Image source={{ uri: product.image }} className="w-20 h-20 rounded-lg mr-4" />
          <View>
            <Text className="text-lg font-semibold">{product.name}</Text>
            <Text className="text-sm text-gray-600">{product.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}