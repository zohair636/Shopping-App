import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    Pressable,
  } from "react-native";
  import React from "react";
  import { styles } from "../../StyleSheet/SplashScreen/SplashScreen";
  import { useNavigation } from "@react-navigation/native";
  import SplashScreenBtn from "../../Buttons/SplashScreenBtn";
  
  const SplashScreen = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View>
          <ImageBackground
            style={styles.bgImage}
            source={require("../../../../assets/1.jpg")}
          />
        </View>
        <View style={styles.yellowStyle} />
        <View style={styles.mainBg}>
          <View style={styles.myShopSetting}>
            <Text style={styles.myShopTxt}>My </Text>
            <Text style={{ ...styles.myShopTxt, color: "#fff" }}>Shop</Text>
          </View>
          <View>
            <Text style={styles.welcomePara}>
              Welcome to our e-commerce platform. Explore, shop, and save today!
            </Text>
          </View>
          <SplashScreenBtn onPress={() => navigation.navigate('Login')} title={'Get Started'} />
        </View>
      </SafeAreaView>
    );
  };
  
  export default SplashScreen;