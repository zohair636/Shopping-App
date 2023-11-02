import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../Global/colors";
import { useNavigation } from "@react-navigation/native";

const SignUpExtraBtn = ({ onPress, alreadyAccount }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.btnSettings}>
        <View>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnTxt}>{alreadyAccount}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnSettings: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 5,
  },
  btnTxt: {
    color: colors.SPLASH_SCREEN_COLOR,
  },
});

export default SignUpExtraBtn;