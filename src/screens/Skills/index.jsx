import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { ListRating } from "../../components/ListRating";
import { styles } from "./styles";

export function SkillScreen() {
  return (
    <View style={styles.container}>
      <Header title="Jonathan Gonçalves de Souza" />
      <ListRating/>
    </View>
  );
}
