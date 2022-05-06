import React from "react";
import { View, Text, Image,  ActivityIndicatorBase, Alert } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import * as AuthSession from "expo-auth-session";
import Background from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

const SignIn = () => {
  const { signIn, loading } = useAuth();
    async function handleSignIn() {
      try {
        await signIn();
      } catch (error) {
        Alert.alert("deu erro");
      }
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

          {loading ? (
            <ActivityIndicatorBase color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
};
export default SignIn;
