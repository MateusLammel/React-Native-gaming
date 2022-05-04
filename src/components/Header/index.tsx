import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";
type Props = {
  title: string;
  action?: React.ReactNode;
};

const Header = ({ title, action }: Props) => {
  const { secondary100, secondary40, reading } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <BorderlessButton>
        <Feather name="arrow-left" size={24} color={reading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && <View></View>}
    </LinearGradient>
  );
};

export default Header;
