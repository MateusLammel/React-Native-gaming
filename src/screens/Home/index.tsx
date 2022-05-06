import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { useCallback } from "react";
import { View, FlatList, Alert } from "react-native";
import Appointment from "../../components/Appointment";
import Background from "../../components/Background";
import { AppointmentProps } from "../../components/Appointment";

import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListDivider from "../../components/ListDivider";
import ListHeader from "../../components/ListHeader";
import Profile from "../../components/Profile";
import { styles } from "./styles";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Load } from "../../components/Load";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = React.useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.dispatch(CommonActions.navigate({ name: "AppointmentDetails" }));
  }
  function handleAppointmentCreate() {
    navigation.dispatch(CommonActions.navigate({ name: "AppointmentCreate" }));
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }
  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment
                onPress={() => handleAppointmentDetails(item)}
                data={item}
              />
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </>
      )}
    </Background>
  );
};

export default Home;
