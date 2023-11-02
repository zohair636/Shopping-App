import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../Global/colors";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordExtraBtn = ({ backToLogin, noAccount }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.btnSettings}>
        <View>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnTxt}>{backToLogin}</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('Sign Up')}>
            <Text style={styles.btnTxt}>{noAccount}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnSettings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  btnTxt: {
    color: colors.SPLASH_SCREEN_COLOR,
  },
});

export default ForgotPasswordExtraBtn;