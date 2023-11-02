import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  containerTitle: {
    margin: height * 0.01,
    fontSize: height * 0.025,
    fontWeight: "600",
  },
  productDataSetting: {
    margin: height * 0.01,
  },
  productImgSetting: {
    width: width * 0.45,
    height: height * 0.3,
    borderRadius: height * 0.02,
  },
  productPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
