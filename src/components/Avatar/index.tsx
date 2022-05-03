import React from "react";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

type Props = {
  urlImage: string;
};

const Avatar = (props: Props) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary50, theme.colors.secondary70]}
    >
      <Image source={{ uri: props.urlImage }}
      style={styles.avatar} />
    </LinearGradient>
  );
};

export default Avatar;
