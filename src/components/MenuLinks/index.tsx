import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";

export function MenuLinks() {
  const linkedinLink =
    "https://www.linkedin.com/in/jonathan-gon%C3%A7alves-607411167/";
  const instagramLink = "https://www.instagram.com/jonathangs07/";
  const githubLink = "https://github.com/JonathanGoncalves7";

  return (
    <View style={styles.container}>
      <Button title="Linkedin" iconName="linkedin" link={linkedinLink} />
      <Button title="Instagram" iconName="instagram" link={instagramLink} />
      <Button title="Github" iconName="github" link={githubLink} />
    </View>
  );
}
