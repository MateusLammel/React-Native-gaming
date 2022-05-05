import { CommonActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, FlatList, Alert } from "react-native";
import Appointment from "../../components/Appointment";
import Background from "../../components/Background";

import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListDivider from "../../components/ListDivider";
import ListHeader from "../../components/ListHeader";
import Profile from "../../components/Profile";
import { styles } from "./styles";

const Home = () => {
  const [category, setCategory] = React.useState("");
  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleAppointmentDetails() {
    navigation.dispatch(CommonActions.navigate({ name: "AppointmentDetails" }));
  }
  function handleAppointmentCreate() {
    navigation.dispatch(CommonActions.navigate({ name: "AppointmentCreate" }));
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

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
      
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
   
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointment onPress={handleAppointmentDetails} data={item} />
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{paddingBottom: 40}}
      />
    </Background>
  );
};;

export default Home;
