import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
}

const ButtonAdd = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.reading}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default ButtonAdd;
