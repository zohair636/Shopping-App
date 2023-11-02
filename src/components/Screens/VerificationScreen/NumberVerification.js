import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Header from "../Headers/AuthenticationHeader";
import { styles } from "../../StyleSheet/VerificationScreen/Verification";
//import CountryPicker from "react-native-country-picker-modal";
import SplashScreenBtn from "../../Buttons/SplashScreenBtn";
import DialPad from "./DialPad";
import { TextInput } from "react-native";

const VerificationScreen = () => {
  const [pickNumber, setPickNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title_1={"What is Your Phone"}
        title_2={"Number?"}
        back={"leftcircle"}
        prevScreen={"Sign Up"}
      />
      <View style={styles.enterPhoneSetting}>
        <Text style={styles.enterPhoneTxt}>
          Please enter your phone number to verify your account.
        </Text>
      </View>
      <View style={styles.countrySetting}>
        {/* <CountryPicker withFlag withCallingCode withFilter /> */}
        <TextInput
          style={styles.phoneNumberSetting}
          placeholder="300*******"
          value={pickNumber}
        />
      </View>
      <View>
        <SplashScreenBtn title={"Send Verification Code"} />
      </View>
      <View>
        <Text style={styles.skipTxt}>SKIP</Text>
      </View>
      <View>
        <DialPad pickNumber={pickNumber} onChange={setPickNumber} />
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;