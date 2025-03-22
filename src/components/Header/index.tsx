import React from "react";
import { View } from "react-native";
import { CircleImage } from "../../components/CircleImage";
import { TitleText } from "../../components/TitleText";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
      <CircleImage />
      <TitleText title={props.title} />
    </View>
  );
}
