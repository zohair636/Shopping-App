import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../Global/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  yellowStyle: {
    backgroundColor: colors.YELLOW_COLOR,
    width: '47%',
    height: "15%",
    borderTopLeftRadius: height * 1,
    position: "absolute",
    //top: 0,
    right: 0,
    top: height * 0.6,
    opacity: 0.8,
  },
  mainBg: {
    backgroundColor: colors.SPLASH_SCREEN_COLOR,
    padding: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height * 0.3,
    borderTopLeftRadius: height * 0.045,
    borderTopRightRadius: height * 0.045,
  },
  myShopSetting: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    margin: 5,
  },
  myShopTxt: {
    color: colors.YELLOW_COLOR,
    fontSize: 30,
    fontWeight: "bold",
  },
  welcomePara: {
    color: colors.WHITE_COLOR,
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
    margin: 10,
    top: 5,
  },
  btnSetting: {
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    backgroundColor: colors.YELLOW_COLOR,
    padding: 8,
    borderRadius: 100,
    //elevation: 5,
  },
  btnTxt: {
    color: colors.BLACK_COLOR,
    fontSize: 17,
    fontWeight: "500",
  },
});

export { styles };