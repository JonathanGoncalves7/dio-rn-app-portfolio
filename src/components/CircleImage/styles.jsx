import { StyleSheet } from "react-native";
import colors from "../../themes/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 180,
    borderWidth: 3,
    borderColor: colors.border,
    resizeMode: "stretch",
  },
});
