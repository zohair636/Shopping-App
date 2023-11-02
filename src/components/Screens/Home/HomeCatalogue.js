import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { styles } from "../../StyleSheet/HomeScreen/HomeCatalogue";
import { getFirestore, getDocs, collection, query } from "firebase/firestore";
import app from "../../../Global/Firebase";
import colors from "../../../Global/colors";

const HomeCatalogue = ({ title, viewAll }) => {
  const db = getFirestore(app);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadProductData = async () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      let products = [];
      const q = query(collection(db, "Catalogue"));
      const data = await getDocs(q);
      data.forEach((item) => {
        products.push(item);
      });
      setProducts(products);
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

  const renderProductItems = ({ item }) => {
    return (
      <View style={styles.catalogueSettings}>
        <Image style={styles.imgSetting} source={{ uri: item.data().image }} />
        <View style={styles.catalogueDataSetting}>
          <Text style={{ color: "white" }}>{item.data().title}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.catalogueSettings}>
        <Text style={styles.mainTxt}>{title}</Text>
        <Text style={styles.seeAllTxt}>
          {viewAll} {">"}
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={renderProductItems}
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

export default HomeCatalogue;
