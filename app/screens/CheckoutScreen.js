import React from "react";
import { View, Text, Button } from "react-native";
import { useCart } from "../context/CartContext";

export default function CheckoutScreen() {
  const { cart } = useCart();

  const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold">Checkout</Text>
      {cart.length === 0 ? (
        <Text className="text-lg">No items in the cart.</Text>
      ) : (
        <>
          <Text className="text-lg">Items:</Text>
          {cart.map((item) => (
            <View key={item.id} className="flex-row justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-lg">
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          ))}
          <Text className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</Text>
          <Button title="Place Order" onPress={() => alert("Order Placed!")} />
        </>
      )}
    </View>
  );
}