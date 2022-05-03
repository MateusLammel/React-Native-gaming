import { style } from "@mui/system";
import React from "react";
import { Text, Image, View, TouchableOpacity, GestureResponderEvent } from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";


interface Props {
  onPress: (event: GestureResponderEvent) => void;
}

const ButtonIcon = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>Entrar com Discord</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
