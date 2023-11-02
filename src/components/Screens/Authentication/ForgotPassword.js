import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    FlatList,
    KeyboardAvoidingView,
    Alert,
  } from "react-native";
  import React, { useState, useEffect, useRef } from "react";
  import { styles } from "../../StyleSheet/LoginScreen/LoginScreen";
  import SplashScreenBtn from "../../Buttons/SplashScreenBtn";
  import ForgotPasswordExtraBtn from "../../Buttons/ForgotPasswordExtraBtn";
  import Header from "../Headers/AuthenticationHeader";
  import { getAuth, sendPasswordResetEmail } from "firebase/auth";
  import app from "../../../Global/Firebase";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import * as Notifications from "expo-notifications";
  import * as Device from "expo-device";
  
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  
  const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const auth = getAuth(app);
  
    const [expoPushToken, setExpoPushToken] = useState("");
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
  
    useEffect(() => {
      registerForPushNotificationsAsync().then((token) =>
        setExpoPushToken(token)
      );
  
      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });
  
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });
  
      return () => {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);
  
    const loginData = [
      {
        id: "1",
        label: "Email Address",
        placeholder: "Enter Your Registered Email Address",
        value: email,
        onChangeText: (text) => setEmail(text),
        icon: "account",
      },
    ];
  
    const renderLogin = ({ item }) => {
      return (
        <View>
          <View>
            <Text style={styles.inputLabel}>{item.label}</Text>
          </View>
          <KeyboardAvoidingView>
            {item.label === "Email Address" ? (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder={item.placeholder}
                  value={item.value}
                  onChangeText={item.onChangeText}
                  secureTextEntry={item.secureEntry}
                />
                <MaterialCommunityIcons
                  style={styles.inputIcons}
                  name={item.icon}
                  size={24}
                  color="#c1c1c1"
                />
              </View>
            ) : (
              <TextInput
                style={styles.input}
                placeholder={item.placeholder}
                value={item.value}
                onChangeText={item.onChangeText}
                secureTextEntry={item.secureEntry}
              />
            )}
          </KeyboardAvoidingView>
        </View>
      );
    };
  
    const forgotPasswordAuth = async () => {
      if (!email) {
        Alert.alert("Email is required");
      } else {
        try {
          if (auth) {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 1500);
            const registeredUser = await sendPasswordResetEmail(auth, email);
            Notifications.scheduleNotificationAsync({
              content: {
                title: "Congratulations!",
                body: "An Email was successfully sent to your Gmail account!",
              },
              trigger: null,
            });
          } else {
            setTimeout(() => {
              setIsLoading(false);
            }, 1500);
          }
        } catch (error) {
          console.log(error);
          Alert.alert(error.message);
        }
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title_1={"Welcome To eCommerce"}
          title_2={"Forgot Password Screen"}
          back={"leftcircle"}
          prevScreen={"Login"}
        />
        <View style={styles.loginContainer}>
          <FlatList
            data={loginData}
            renderItem={renderLogin}
            keyExtractor={(item) => item.id}
          />
          <ForgotPasswordExtraBtn
            backToLogin={"Back to Login?"}
            noAccount={"Didn't have an Account?"}
          />
          <SplashScreenBtn
            title={"Reset Password"}
            onPress={forgotPasswordAuth}
            loading={isLoading}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default ForgotPassword;
  
  async function registerForPushNotificationsAsync() {
    try {
      let token;
  
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
  
      if (Device.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          alert("Failed to get push token for push notification!");
          return;
        }
        // Learn more about projectId:
        // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
        token = (
          await Notifications.getExpoPushTokenAsync({
            projectId: "25fca6e4-254d-4d7b-9b24-18da7cbbed84",
          })
        ).data;
        console.log(token);
      } else {
        alert("Must use physical device for Push Notifications");
      }
  
      return token;
    } catch (error) {
      console.log(error);
    }
  }