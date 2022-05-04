import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  View,
} from "react-native";
import React from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import CategorySelect from "../../components/CategorySelect";
import { Feather } from "@expo/vector-icons";

const AppointmentCreate = () => {
  const [category, setCategory] = React.useState("");

  return (
    <Background>
      <Header title="Agendar partida" />

      <Text style={styles.label}>Categoria</Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <TouchableOpacityComponent>
          <View style={styles.select}>
            <View style={styles.image} />
            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione o servidor</Text>
            </View>

            <Feather
              name="chevron-right"
              color={theme.colors.reading}
              size={18}
            />
          </View>
        </TouchableOpacityComponent>
      </View>
    </Background>
  );
};

export default AppointmentCreate;
