import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerShown: false,
        contentStyle:{backgroundColor:  "transparent"}

      }
  }
      
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AuthRoutes;
