import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    FlatList,
    KeyboardAvoidingView,
    Alert,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { useState } from "react";
  import { styles } from "../../StyleSheet/LoginScreen/LoginScreen";
  import SplashScreenBtn from "../../Buttons/SplashScreenBtn";
  import SignUpExtraBtn from "../../Buttons/SignUpExtraBtn";
  import { useNavigation } from "@react-navigation/native";
  import Header from "../Headers/AuthenticationHeader";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { getFirestore, doc, setDoc } from "firebase/firestore";
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
  
  const SignUp = () => {
    const navigation = useNavigation();
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const auth = getAuth();
    const db = getFirestore();
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const signupData = [
      {
        id: "1",
        label: "First Name",
        placeholder: "Enter Your First Name",
        value: fName,
        onChangeText: (text) => setFName(text),
        icon: "account-circle",
      },
      {
        id: "2",
        label: "Last Name",
        placeholder: "Enter Your Last Name",
        value: lName,
        onChangeText: (text) => setLName(text),
        icon: "account-circle",
      },
      {
        id: "3",
        label: "Age",
        placeholder: "Enter Your Age",
        value: age,
        onChangeText: (text) => setAge(text),
        icon: "account-circle",
      },
      {
        id: "4",
        label: "Address",
        placeholder: "Enter Your Address",
        value: address,
        onChangeText: (text) => setAddress(text),
        icon: "home",
      },
      {
        id: "5",
        label: "Email Address",
        placeholder: "Enter Your Email Address",
        value: email,
        onChangeText: (text) => setEmail(text),
        icon: "account",
      },
      {
        id: "6",
        label: "Password",
        placeholder: "Enter Your Password",
        value: password,
        onChangeText: (text) => setPassword(text),
        secureEntry: !showPassword,
        icon: "lock",
        eye: "eye",
      },
    ];
  
    const renderSignUp = ({ item }) => {
      return (
        <View>
          <View>
            <Text style={styles.inputLabel}>{item.label}</Text>
          </View>
          <View>
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
            ) : item.label === "First Name" ? (
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
            ) : item.label === "Last Name" ? (
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
            ) : item.label === "Age" ? (
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
            ) : item.label === "Address" ? (
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
          </View>
        </View>
      );
    };
  
    const signupAuth = async () => {
      if (!fName || !lName || !age || !address || !email || !password) {
        Alert.alert("All fields are required");
      } else {
        try {
          if (password.length < 6) {
            Alert.alert("Password must be at least 6 characters long");
          } else {
            if (auth) {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 1500);
              await setDoc(doc(db, "Users", email), {
                fName,
                lName,
                age,
                address,
                email,
              });
              const registerUser = await createUserWithEmailAndPassword(
                auth,
                email,
                password
              );
              const user = registerUser.user;
              console.log("User Registered Successfully", user);
              setSuccessModal(true);
              setTimeout(() => {
                setSuccessModal(false);
              }, 2000);
              //navigation.navigate("Verification");
            } else {
              setTimeout(() => {
                setIsLoading(false);
              }, 1500);
            }
          }
        } catch (error) {
          console.log(error);
          Alert.alert(error.message);
        }
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Header title_1={"Welcome To eCommerce"} title_2={"Sign Up Screen"} />
        <View style={styles.loginContainer}>
          <FlatList
            data={signupData}
            renderItem={renderSignUp}
            keyExtractor={(item) => item.id}
          />
          <SignUpExtraBtn alreadyAccount={"Already have an Account?"} />
          <SplashScreenBtn
            title={"Register"}
            onPress={signupAuth}
            loading={isLoading}
          />
          <SuccessModal
            visible={successModal}
            onPress={() => setSuccessModal(false)}
            title={"Success"}
            iconName={"check"}
            description={"User Registered Successfully!"}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default SignUp;