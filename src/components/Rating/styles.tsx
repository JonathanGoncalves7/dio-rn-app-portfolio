import { StyleSheet } from "react-native";
import colors from "../../themes/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: colors.text, fontSize: 24, fontWeight: "600" },
  rating: {},
});
