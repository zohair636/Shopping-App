import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Global/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.MODAL_BG_COLOR,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBg: {
    backgroundColor: colors.WHITE_COLOR,
    padding: height * 0.01,
    borderRadius: height * 0.02,
    width: width * 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  headingSetting: {
    justifyContent: "center",
    alignItems: "center",
    margin: height * 0.007,
  },
  icon: {
    borderColor: colors.LIGHT_GREEN_COLOR,
    borderWidth: height * 0.008,
    borderRadius: height * 1,
    backgroundColor: colors.GREEN_COLOR,
    padding: height * 0.007,
  },
  headingTxt: {
    fontSize: height * 0.02,
    fontWeight: "500",
    margin: height * 0.007,
  },
  modalDescription: {
    fontSize: height * 0.018,
    fontWeight: "500",
    margin: height * 0.007,
  },
});

export { styles };