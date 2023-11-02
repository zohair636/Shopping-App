import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../../Global/Firebase";
import * as Location from "expo-location";

const ProfileScreen = () => {
  const db = getFirestore(app);
  const auth = getAuth();
  const [userData, setUserData] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const loadUserData = async () => {
    try {
      if (auth) {
        let userData = [];
        const q = query(collection(db, "Users"));
        const data = await getDocs(q);
        data.forEach((item) => userData.push(item));
        setUserData(userData);
        await setDoc(doc(db, "Location", "Abc@gmail.com"), {
          location
        });
        await getDoc(doc(db, "Location", "Abc@gmail.com"));
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);

      Location.watchPositionAsync({ distanceInterval: 50 }, (loc) => {
        setLocation(loc);
        console.log(loc);
      });
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const renderUserData = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text>You Logged In As: </Text>
          <Text>{item.data().fName} </Text>
          <Text>{item.data().lName}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text>{item.data().fName} </Text>
          <Text>{item.data().lName} current location is:</Text>
        </View>
        <Text style={{ margin: 10 }}>{text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={userData}
        renderItem={renderUserData}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
