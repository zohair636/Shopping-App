import { View, Text } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../StyleSheet/LoginScreen/LoginScreen";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title_1, title_2, back, prevScreen }) => {
  const ref = useRef(null);
  const navigation = useNavigation();

  const handleGoBack = () => {
    ref.current && ref.current.goBack();
    navigation.navigate(prevScreen);
  };

  return (
    <SafeAreaView>
      <LinearGradient
        style={styles.headerBg}
        colors={["#492289", "#642ED7", "#6E2ED7", "#6E2ED7"]}
      >
        <View style={styles.goBackBtnSetting}>
          <Pressable style={styles.goBackIcon} onPress={handleGoBack}>
            <AntDesign
              name={back}
              size={24}
              color="white"
            />
          </Pressable>
          <View>
            <Text style={styles.headerTxt}>{title_1}</Text>
            <Text style={{ ...styles.headerTxt, textAlign: "left" }}>
              {title_2}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Header;