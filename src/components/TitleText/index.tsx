import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface TitleTextProps {
  title: string;
}

export function TitleText(props: TitleTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}
