import { style } from "@mui/system";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import GuildIcon from "../GuildIcon";
import { categories } from "../../utils/categories";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

const Appointment = ({ data, ...rest }: Props) => {
  const [category] = categories.filter((item) => item.id === data.category);

  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg
                fill={data.guild.owner ? theme.colors.primary : theme.colors.on}
              />

              <Text
                style={[
                  styles.player,
                  {
                    color: data.guild.owner
                      ? theme.colors.primary
                      : theme.colors.on,
                  },
                ]}
              >
                {data.guild.owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

export default Appointment;
