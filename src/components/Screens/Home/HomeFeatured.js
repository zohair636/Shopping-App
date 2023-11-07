import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  RefreshControl,
  ImageBackground,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../../StyleSheet/HomeScreen/HomeFeatured";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import app from "../../../Global/Firebase";
import colors from "../../../Global/colors";

const HomeFeatured = ({ title }) => {
  const db = getFirestore(app);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadProductData = async () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      const q = query(collection(db, "Featured"));
      //const data = await getDocs(q);
      const subscribe = onSnapshot(q, (data) => {
        let products = [];
        data.forEach((item) => {
          products.push(item);
        });
        setProducts(products);
      });
      const unsubscribe = onSnapshot(collection(db, "Featured"), () => {
        subscribe();
      });
      unsubscribe();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderProductData = ({ item }) => {
    return (
      <View style={styles.productDataSetting}>
        <Image
          style={styles.productImgSetting}
          source={{ uri: item.data().image }}
        />
        <View style={{ ...styles.productImgSetting, margin: 5 }}>
          <Text>{item.data().description}</Text>
          <View style={styles.productPrice}>
            <Text>${item.data().discountedPrice}</Text>
            <Text style={{ textDecorationLine: "line-through" }}>
              ${item.data().totalPrice}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.containerTitle}>{title}</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={renderProductData}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            progressBackgroundColor={colors.HOME_HEADER_COLOR}
            colors={[colors.WHITE_COLOR]}
            refreshing={isLoading}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

export default HomeFeatured;
