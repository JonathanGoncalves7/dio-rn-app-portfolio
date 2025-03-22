import { StyleSheet } from "react-native";
import colors from "../../themes/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    color: colors.text,
  },
});
