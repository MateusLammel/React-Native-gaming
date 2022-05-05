import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.reading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: "center",
    borderWidth:1,
    borderColor: theme.colors.secondary50  },
});
