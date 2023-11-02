import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Global/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  cartItemsBg: {
    backgroundColor: colors.HOME_HEADER_COLOR,
    padding: height * 0.015,
    position: "absolute",
    right: 0,
    bottom: 10,
    borderTopLeftRadius: height * 1,
    borderBottomLeftRadius: height * 1,
    width: width * 0.35,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cartItemsTxt: {
    color: colors.WHITE_COLOR,
    fontSize: height * 0.015,
  },
});

export { styles };
