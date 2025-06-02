import { Stack } from "expo-router";

export default function TareasLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tareas" }} />
      <Stack.Screen name="[tareaId]" options={{ title: "Subtareas" }} />
      <Stack.Screen
        name="[tareaId]/[subtareaId]"
        options={{ title: "Detalle" }}
      />
    </Stack>
  );
}
