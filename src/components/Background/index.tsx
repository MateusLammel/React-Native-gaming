import React from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";



type Props = {
  children: React.ReactNode;
};

const Background = (props: Props) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
     {props.children}
    </LinearGradient>
  );
};

export default Background;
