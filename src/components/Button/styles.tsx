import { StyleSheet } from "react-native";
import colors from "../../themes/Colors";

export const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: colors.border,
    backgroundColor: colors.secondary,
  },
  icon: {},
  text: { fontSize: 20, fontWeight: "500", color: colors.textSecundary },
});
