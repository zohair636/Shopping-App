import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { styles } from "../StyleSheet/CartItemsCount/CartItemsCount";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CartItemsCount = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.cartItemsBg}>
        <MaterialCommunityIcons name="cart" size={35} color="white" />
        <View>
          <Text style={styles.cartItemsTxt}>${totalAmount}</Text>
          <Text style={styles.cartItemsTxt}>{totalItems} items</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartItemsCount;
