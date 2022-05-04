import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import Avatar from "../Avatar";
import { styles } from "./styles";


const SmallInput = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput style={styles.container} keyboardType="numeric" {...rest} />
  );
};

export default SmallInput;
