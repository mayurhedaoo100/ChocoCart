import React from "react";
import { View, Text, Button } from "react-native";
import { useCart } from "../context/CartContext";

export default function CartScreen({ navigation }) {
  const { cart, removeFromCart } = useCart();

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold">Your Cart</Text>
      {cart.length === 0 ? (
        <Text className="text-lg">No items in the cart.</Text>
      ) : (
        <>
          {cart.map((item) => (
            <View key={item.id} className="flex-row justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-lg">
              <Text>{item.name}</Text>
              <Button title="Remove" onPress={() => removeFromCart(item.id)} />
            </View>
          ))}
          <Button title="Go to Checkout" onPress={() => navigation.navigate("Checkout")} />
        </>
      )}
    </View>
  );
}
