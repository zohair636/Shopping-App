import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Global/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    //margin: height * 0.02,
    left: width * 0.05
  },
  containerBg: {
    width: width * 0.9,
    height: height * 0.13,
    borderRadius: height * 0.02,
  },
  mainTxt: {
    fontSize: height * 0.022,
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.WHITE_COLOR,
  },
  mainTxtSetting: {
    margin: height * 0.02,
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  seeMoreTxt: {
    fontSize: height * 0.018,
    fontWeight: "500",
    color: colors.WHITE_COLOR,
    marginTop: height * 0.007,
  },
  iconSetting: {
    position: "absolute",
    bottom: height * 0.01,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  icons: {
    margin: width * 0.015,
  },
});

export { styles };
