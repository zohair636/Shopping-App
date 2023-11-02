import { View, Text, Modal, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { styles } from "../StyleSheet/ModalScreen/ModalScreen";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../Global/colors";

const SuccessModal = ({ visible, onPress, title, iconName, description }) => {
  return (
    <SafeAreaView>
      <Modal
        visible={visible}
        onRequestClose={onPress}
        transparent
        animationType="fade"
      >
        <Pressable style={styles.container} onPress={onPress}>
          <Pressable style={styles.modalBg}>
            <View style={styles.headingSetting}>
              <View style={styles.icon}>
                <AntDesign
                  name={iconName}
                  size={34}
                  color={colors.WHITE_COLOR}
                />
              </View>
              <Text style={styles.headingTxt}>{title}</Text>
            </View>
            <View>
              <Text style={styles.modalDescription}>{description}</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default SuccessModal;