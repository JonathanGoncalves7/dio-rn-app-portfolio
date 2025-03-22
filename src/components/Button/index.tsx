import React, { useCallback } from "react";
import { Alert, Pressable, Text, PressableProps, Linking } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
import colors from "../../themes/Colors";

interface ButtomProps extends PressableProps {
  title: string;
  link: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

export function Button(props: ButtomProps) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(props.link);

    if (supported) {
      await Linking.openURL(props.link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${props.link}`);
    }
  }, [props.link]);

  return (
    <Pressable style={styles.container} onPress={() => handlePress()}>
      <MaterialCommunityIcons
        style={styles.icon}
        name={props.iconName}
        size={50}
        color={colors.textSecundary}
      />
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}
