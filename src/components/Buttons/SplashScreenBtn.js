import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    ActivityIndicator,
  } from "react-native";
  import React from "react";
  import { styles } from "../StyleSheet/SplashScreen/SplashScreen";
  
  const SplashScreenBtn = ({ onPress, title, loading }) => {
    return (
      <SafeAreaView>
        <View>
          <Pressable style={styles.btnSetting} onPress={onPress}>
            {loading ? (
              <ActivityIndicator color={'black'} size={24} />
            ) : (
              <Text style={styles.btnTxt}>{title}</Text>
            )}
          </Pressable>
        </View>
      </SafeAreaView>
    );
  };
  
  export default SplashScreenBtn;