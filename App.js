import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "./src/components/Screens/SplashScreen/SplashScreen";
import Login from "./src/components/Screens/Authentication/Login";
import SignUp from "./src/components/Screens/Authentication/SignUp";
import ForgotPassword from "./src/components/Screens/Authentication/ForgotPassword";
import VerificationScreen from "./src/components/Screens/VerificationScreen/NumberVerification";
import HomeScreen from "./src/components/Screens/Home/HomeScreen";
import ProfileScreen from "./src/components/Screens/Profile/ProfileScreen";
import { StatusBar, Platform } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "./src/Global/colors";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [userAuth, setUserAuth] = useState(null);
  const auth = getAuth();

  const AuthNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const HomeNav = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.HOME_HEADER_COLOR,
          tabBarInactiveTintColor: colors.SUB_HEADER_TXT_COLOR,
          tabBarStyle: {
            //borderRadius: 15,
            height: "7.5%",
            //margin: "2%",
            padding: 3,
          },
          tabBarLabelStyle: { margin: "10%", fontSize: 11 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Entypo
                name='home'
                size={focused ? 24 : 22}
                color={
                  focused
                    ? colors.BOTTOM_TAB_ACTIVE_ICON_COLOR
                    : colors.BOTTOM_TAB_INACTIVE_ICON_COLOR
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="bars"
                size={focused ? 24 : 22}
                color={
                  focused
                    ? colors.BOTTOM_TAB_ACTIVE_ICON_COLOR
                    : colors.BOTTOM_TAB_INACTIVE_ICON_COLOR
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="heart"
                size={focused ? 24 : 22}
                color={
                  focused
                    ? colors.BOTTOM_TAB_ACTIVE_ICON_COLOR
                    : colors.BOTTOM_TAB_INACTIVE_ICON_COLOR
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="user"
                size={focused ? 24 : 22}
                color={
                  focused
                    ? colors.BOTTOM_TAB_ACTIVE_ICON_COLOR
                    : colors.BOTTOM_TAB_INACTIVE_ICON_COLOR
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  onAuthStateChanged(auth, (user) => {
    if (auth) {
      setUserAuth(user);
      const uid = user.uid;
      console.log(uid);
    } else {
      setUserAuth(null);
    }
  });

  return (
    <NavigationContainer>
      {/* <StatusBar animated  /> */}
      {userAuth ? <HomeNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default App;