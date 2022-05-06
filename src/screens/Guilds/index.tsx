import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import BannerPNG from "../../assets/banner.png";
import { styles } from "./styles";
import ListHeader from "../../components/ListHeader";
import { FlatList } from "react-native-gesture-handler";
import Member from "../../components/Member";
import ListDivider from "../../components/ListDivider";
import ButtonIcon from "../../components/ButtonIcon";
import Guild, { GuildProps } from "../../components/Guild";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Load } from "../../components/Load";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

const Guilds = ({ handleGuildSelected }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get("/users/@me/guilds");

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.guilds}
          contentContainerStyle={{ paddingBottom: 50, paddingTop: 50 }}
          ListHeaderComponent={() => <ListDivider />}
        />
      )}
    </View>
  );
};

export default Guilds;
