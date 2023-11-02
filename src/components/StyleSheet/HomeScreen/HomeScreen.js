import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../Global/colors";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.HOME_BG_COLOR,
    },
});

export {styles};