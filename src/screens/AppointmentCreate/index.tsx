import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import React from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import CategorySelect from "../../components/CategorySelect";
import { Feather } from "@expo/vector-icons";
import SmallInput from "../../components/SmallInput";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const AppointmentCreate = () => {
  const [category, setCategory] = React.useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 26, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <TouchableOpacity>
              <View style={styles.select}>
                <View style={styles.image} />
                <View style={styles.selectBody}>
                  <Text style={styles.label}>Selecione o servidor</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e minuto</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max de 100 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect-={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>

     
    </KeyboardAvoidingView>
  );
};

export default AppointmentCreate;
