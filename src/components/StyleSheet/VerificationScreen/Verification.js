import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Global/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE_COLOR,
  },
  enterPhoneSetting: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.05,
  },
  enterPhoneTxt: {
    fontSize: height * 0.019,
  },
  countrySetting: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: height * 0.01,
    marginTop: height * 0.05,
  },
  phoneNumberSetting: {
    paddingLeft: width * 0.05,
    borderBottomColor: colors.BLACK_COLOR,
    borderBottomWidth: height * 0.001,
    width: width * 0.35,
    margin: height * 0.01,
  },
  skipTxt: {
    textAlign: "center",
    margin: height * 0.01,
    fontSize: height * 0.02,
    fontWeight: "500",
    color: colors.LOGIN_TXT_COLOR,
  },
});

export { styles };