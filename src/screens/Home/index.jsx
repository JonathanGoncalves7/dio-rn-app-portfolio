import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { MenuLinks } from "../../components/MenuLinks";
import { styles } from "./styles";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Jonathan Gonçalves de Souza" />
      <MenuLinks />
    </View>
  );
}
