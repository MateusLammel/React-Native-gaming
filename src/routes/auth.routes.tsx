import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import { theme } from "../global/styles/theme";
import AppointmentDetails from "../screens/AppointmentDetails";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
    </Navigator>
  );
};

export default AuthRoutes;
