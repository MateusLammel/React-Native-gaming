import React from "react";
import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { styles } from "./styles";


interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  title: string,
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={props.onPress}>
      
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
