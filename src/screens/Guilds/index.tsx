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

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

const Guilds = ({ handleGuildSelected }: Props) => {
  const guilds = [
    {
      id: "1",
      name: "Mateus",
      icon: "image.png",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
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
        ListHeaderComponent={()=> <ListDivider/>}
      />
    </View>
  );
};

export default Guilds;
