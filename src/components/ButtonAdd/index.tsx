import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";



const ButtonAdd = () => {
  return (
    <RectButton style={styles.container}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.reading}
        size={24}
      />
    </RectButton>
  );
};

export default ButtonAdd;
