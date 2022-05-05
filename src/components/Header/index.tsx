import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
type Props = {
  title: string;
  action?: React.ReactNode;
};

const Header = ({ title, action }: Props) => {
  const { secondary100, secondary40, reading } = theme.colors;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <TouchableOpacity onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={reading} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
};

export default Header;
