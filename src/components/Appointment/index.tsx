import { style } from "@mui/system";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import GuildIcon from "../GuildIcon";

type Props = RectButtonProps & {
    data: AppointmentProps
};

export type GuildProps = {};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

const Appointment = ({data, ...rest}: Props) => {
  return <RectButton style={styles.container} {...rest}>
      <View style={styles.container}>

        <GuildIcon />


      </View>




  </RectButton>;
};

export default Appointment;
