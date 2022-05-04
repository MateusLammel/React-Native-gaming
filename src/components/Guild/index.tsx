import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GuildIcon from "../GuildIcon";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = {
  data: GuildProps;
};

const Guild = ({ data}: Props) => {
  return (
    <TouchableOpacity style={styles.container} >
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Usuário"}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" color={theme.colors.reading} size={24} />
    </TouchableOpacity>
  );
};

export default Guild;
