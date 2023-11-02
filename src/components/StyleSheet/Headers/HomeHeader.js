import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Global/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  headerBg: {
    backgroundColor: colors.HOME_HEADER_COLOR,
    height: height * 0.14,
    borderBottomLeftRadius: height * 0.03,
    borderBottomRightRadius: height * 0.03,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: height * 0.015,
    top: height * 0.03
  },
  subHeaderBg: {
    backgroundColor: colors.WHITE_COLOR,
    padding: height * 0.01,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: width * 0.75,
    borderRadius: height * 0.014,
    position: "absolute",
    top: height * 0.055,
  },
  subHeaderTxt: {
    color: colors.SUB_HEADER_TXT_COLOR,
  },
});

export { styles };