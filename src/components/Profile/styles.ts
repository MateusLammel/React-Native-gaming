import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
flexDirection: "row",
alignItems: "center"
},
user:{
    flexDirection: "row",
},
greeting:{
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.reading,
    marginRight: 6
},
username:{
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.reading,
},
message:{
     fontFamily: theme.fonts.text400,
         color: theme.colors.highlight,
         
}




});
