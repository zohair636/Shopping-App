import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { styles } from "../../StyleSheet/HomeScreen/HomeTopImage";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import app from "../../../Global/Firebase";
import colors from "../../../Global/colors";

const HomeTopImage = ({ more }) => {
  const db = getFirestore(app);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadProductsData = async () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      let products = [];
      const q = query(collection(db, "products"));
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
    loadProductsData();
  }, []);

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderProductItems = ({ item }) => {
    return (
      <View style={styles.containerSetting}>
        <Image style={styles.containerBg} source={{ uri: item.data().image }} />
        <View style={styles.mainTxtSetting}>
          <Text style={styles.mainTxt}>{item.data().title}</Text>
          <Text style={styles.seeMoreTxt}>
            {more} {">"}
          </Text>
        </View>
        <View style={styles.iconSetting}>
          <View style={styles.icons}>
            <Entypo name="controller-record" size={12} color="white" />
          </View>
          <View style={styles.icons}>
            <Entypo name="controller-record" size={12} color="white" />
          </View>
          <View style={styles.icons}>
            <Entypo name="controller-record" size={12} color="white" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
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

export default HomeTopImage;
