import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home";
import { SkillScreen } from "../screens/Skills";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../themes/Colors";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary, // Define a cor da barra de navegação
          height: 60, // Ajusta a altura da barra, se necessário
          borderTopWidth: 0, // Remove a borda superior, se necessário
        },
        tabBarActiveTintColor: "#fff", // Cor do ícone/texto ativo
        tabBarInactiveTintColor: "#ccc", // Cor do ícone/texto inativo
      }}
    >
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="home"
              color={colors.secondary}
              size={size}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 18,
          },
        }}
      />
      <Screen
        name="skill"
        component={SkillScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="star"
              color={colors.secondary}
              size={size}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 18,
          },
        }}
      />
    </Navigator>
  );
}
