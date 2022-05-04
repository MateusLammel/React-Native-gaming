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

const AppointmentDetails = () => {
  const members = [
    {
      id: "1",
      username: "Mateus",
      avatar_url: "https://github.com/MateusLammel.png",
      status: "online",
    },
    {
      id: "2",
      username: "Douglas",
      avatar_url: "https://github.com/eezsm93.png",
      status: "online",
    },
    {
      id: "3",
      username: "Duda Rosa",
      avatar_url: "https://github.com/dudarsantos.png",
      status: "online",
    },
    {
      id: "4",
      username: "Duda Santos",
      avatar_url: "https://github.com/dudasancar",
      status: "online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        }
      />

      <ImageBackground source={BannerPNG} style={styles.banner}>
        <View style={styles.textContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
};

export default AppointmentDetails;
