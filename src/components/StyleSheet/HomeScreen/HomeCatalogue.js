import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  containerSetting: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  mainTxt: {
    fontSize: height * 0.025,
    fontWeight: "600",
  },
  seeAllTxt: {
    fontWeight: "500",
  },
  catalogueSettings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: height * 0.01,
  },
  imgSetting: {
    width: width * 0.4,
    height: height * 0.13,
    borderRadius: height * 0.02,
  },
  catalogueDataSetting: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
    width: "100%",
    borderBottomLeftRadius: height * 0.02,
    borderBottomRightRadius: height * 0.02,
    padding: height * 0.007
  },
});

export { styles };
