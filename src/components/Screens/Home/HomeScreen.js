import { View, Text, Pressable, SafeAreaView, Button } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { styles } from "../../StyleSheet/HomeScreen/HomeScreen";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import HomeHeader from "../Headers/HomeHeader";
import CartItemsCount from "../../CartItemsCount/CartItemsCount";
import HomeTopImage from "./HomeTopImage";
import HomeCatalogue from "./HomeCatalogue";
import HomeFeatured from "./HomeFeatured";

const HomeScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth();

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <HomeTopImage more={'See More'} />
      <HomeCatalogue title={'Catalogue'} viewAll={'See All'} />
      <HomeFeatured title={"Featured"} />
      <CartItemsCount />
    </SafeAreaView>
  );
};

export default HomeScreen;