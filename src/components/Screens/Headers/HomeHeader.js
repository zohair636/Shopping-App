import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../../StyleSheet/Headers/HomeHeader";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../Global/colors";

const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBg}>
        <View style={styles.headerIcons}>
          <FontAwesome5 name="bars" size={24} color={colors.WHITE_COLOR} />
          <MaterialCommunityIcons
            name="bell"
            size={24}
            color={colors.WHITE_COLOR}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.subHeaderBg}>
            <FontAwesome5
              name="glasses"
              size={20}
              color={colors.SUB_HEADER_TXT_COLOR}
            />
            <Text style={styles.subHeaderTxt}>What are you looking for?</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;