import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

import ItsFine from "../../../assets/Its-fine.jpg";

export function CircleImage() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ItsFine} />
    </View>
  );
}
