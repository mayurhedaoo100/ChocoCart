import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useCart } from "../context/CartContext";

export default function ProductScreen({ route }) {
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image source={{ uri: product.image }} className="w-40 h-40 mb-4" />
      <Text className="text-2xl font-semibold">{product.name}</Text>
      <Text className="text-xl text-gray-600">{product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
}
