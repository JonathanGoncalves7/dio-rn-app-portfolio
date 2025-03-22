import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Rating } from "../Rating";

export function ListRating() {
  return (
    <View style={styles.container}>
      <Rating label="CSS" rating={1} />
      <Rating label="HTML" rating={1.2} />
      <Rating label="Javascript" rating={1.5} />
    </View>
  );
}
