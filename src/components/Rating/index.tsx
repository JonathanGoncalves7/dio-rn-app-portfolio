import React from "react";
import { View, Text } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { styles } from "./styles";
import colors from "../../themes/Colors";

interface RatingProps {
  label: string;
  rating: number;
}

export function Rating(props: RatingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
      <StarRatingDisplay rating={props.rating} color={colors.primary} />
    </View>
  );
}
