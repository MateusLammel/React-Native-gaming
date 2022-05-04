import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import {
  CommonActions,
  useLinkTo,
  useNavigation,
} from "@react-navigation/native";
import Background from "../../components/Background";

const SignIn = () => {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.dispatch(CommonActions.navigate({ name: "Home" }));
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {`\n`} suas jogatinhas{`\n`} facilmente
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
          </Text>

          <ButtonIcon onPress={handleSingIn} />
        </View>
      </View>
    </Background>
  );
};

export default SignIn;
