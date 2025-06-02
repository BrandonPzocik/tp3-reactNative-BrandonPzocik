import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="inicio"
        options={{
          title: "Inicio",
          tabBarIcon: () => <Ionicons name="home" size={20} color="black" />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: () => <Ionicons name="person" size={20} color="black" />,
        }}
      />
      <Tabs.Screen
        name="tareas"
        options={{
          title: "Tareas",
          tabBarIcon: () => (
            <Ionicons name="checkmark-done" size={20} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
