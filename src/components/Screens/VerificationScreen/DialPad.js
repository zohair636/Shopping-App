import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import colors from "../../../Global/colors";
  
  const DialPad = ({ pickNumber, onChange }) => {
    //const [pickNumber, setPickNumber] = useState("");
  
    const handleDialNumber = (number) => {
      onChange(pickNumber + number);
    };
  
    const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
    const renderItems = ({ item }) => {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btnSetting}
            onPress={() => handleDialNumber(item)}
          >
            <Text style={styles.btnTxt}>{item}</Text>
          </TouchableOpacity>
        </View>
      );
    };
  
    return (
      <SafeAreaView>
        <View>
          <FlatList
            data={data}
            numColumns={3}
            renderItem={renderItems}
            keyExtractor={(item) => item.toString()}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.LOGIN_BG_COLOR,
    },
    btnSetting: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      margin: "2%",
      padding: "5%",
    },
    btnTxt: {
      backgroundColor: colors.LOGIN_BORDER_COLOR,
      padding: 20,
      borderRadius: 10,
    },
  });
  
  export default DialPad;