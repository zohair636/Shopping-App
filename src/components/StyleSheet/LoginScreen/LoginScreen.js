import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Global/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE_COLOR,
  },
  headerBg: {
    height: height * 0.14,
    borderBottomRightRadius: height * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTxt: {
    color: colors.WHITE_COLOR,
    fontSize: height * 0.027,
    fontWeight: "bold",
  },
  loginContainer: {
    position: "absolute",
    bottom: 0,
    width: width * 1,
    backgroundColor: colors.LOGIN_BG_COLOR,
    padding: height * 0.01,
  },
  inputLabel: {
    color: colors.LOGIN_TXT_COLOR,
    fontSize: height * 0.02,
    fontWeight: "500",
    margin: height * 0.005,
  },
  input: {
    borderColor: colors.LOGIN_BORDER_COLOR,
    borderWidth: height * 0.001,
    borderRadius: height * 0.01,
    padding: height * 0.006,
    margin: height * 0.005,
    paddingLeft: width * 0.11,
    backgroundColor: colors.WHITE_COLOR,
  },
  inputIcons: {
    position: "absolute",
    left: 0,
    top: height * 0.013,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: width * 0.035
  },
  passwordIcon: {
    position: "absolute",
    right: 0,
    top: height * 0.017,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: width * 0.035
  },
  buttonsSetting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonTxt: {
    color: colors.SPLASH_SCREEN_COLOR,
  },
  goBackBtnSetting: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  goBackIcon: {
    position: 'absolute',
    left: '-12%'
  },
});

export { styles };