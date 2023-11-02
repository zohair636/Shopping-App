import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    FlatList,
    KeyboardAvoidingView,
    Alert,
  } from "react-native";
  import React from "react";
  import { useState } from "react";
  import { styles } from "../../StyleSheet/LoginScreen/LoginScreen";
  import SplashScreenBtn from "../../Buttons/SplashScreenBtn";
  import LoginExtraBtn from "../../Buttons/LoginExtraBtn";
  import { useNavigation } from "@react-navigation/native";
  import Header from "../Headers/AuthenticationHeader";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import app from "../../../Global/Firebase";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import SuccessModal from "../../Modals/SuccessModal";
  import * as Notifications from "expo-notifications";
  
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  
  const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const auth = getAuth(app);
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const loginData = [
      {
        id: "2",
        label: "Email Address",
        placeholder: "Enter Your Email Address",
        value: email,
        onChangeText: (text) => setEmail(text),
        icon: "account",
      },
      {
        id: "3",
        label: "Password",
        placeholder: "Enter Your Password",
        value: password,
        onChangeText: (text) => setPassword(text),
        secureEntry: !showPassword,
        icon: "account-key",
        eye: "eye",
      },
    ];
  
    const renderLogin = ({ item }) => {
      return (
        <View>
          <View>
            <Text style={styles.inputLabel}>{item.label}</Text>
          </View>
          <KeyboardAvoidingView>
            {item.label === "Password" ? (
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
                {password && (
                  <MaterialCommunityIcons
                    onPress={handleShowPassword}
                    style={styles.passwordIcon}
                    name={item.eye}
                    size={20}
                    color="#c1c1c1"
                  />
                )}
              </View>
            ) : item.label === "Email Address" ? (
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
  
    const signInAuth = async () => {
      if (!email || !password) {
        Alert.alert("All fields are required");
      } else {
        try {
          if (auth) {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 1500);
            const signInUser = await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
            const user = signInUser.user;
            console.log(user);
            setSuccessModal(true);
            setTimeout(() => {
              setSuccessModal(false);
            }, 2000);
          } else {
            setTimeout(() => {
              setIsLoading(false);
            }, 1500);
          }
        } catch (error) {
          console.log(error);
          Alert.alert(error.message);
          setIsLoading(false);
        }
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Header title_1={"Welcome To eCommerce"} title_2={"Login Screen"} />
        <View style={styles.loginContainer}>
          <FlatList
            data={loginData}
            renderItem={renderLogin}
            keyExtractor={(item) => item.id}
          />
          <LoginExtraBtn
            forgotPassword={"Forgot Password?"}
            noAccount={"Didn't have an Account?"}
          />
          <SplashScreenBtn
            title={"Login"}
            onPress={signInAuth}
            loading={isLoading}
          />
          <SuccessModal
            visible={successModal}
            onPress={() => setSuccessModal(false)}
            title={"Success"}
            iconName={"check"}
            description={"You Logged In Successfully!"}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Login;