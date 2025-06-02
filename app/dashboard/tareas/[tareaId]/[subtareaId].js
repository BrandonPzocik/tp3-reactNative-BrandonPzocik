import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { tareas } from "../../../../constants/tareas";

export default function DetalleSubtarea() {
  const { tareaId, subtareaId } = useLocalSearchParams();

  const tarea = tareas.find((t) => t.id === tareaId);
  const subtarea = tarea?.subtareas.find((s) => s.id === subtareaId);

  if (!subtarea) return <Text>Subtarea no encontrada</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {subtarea.titulo}
      </Text>
      <Text>Descripción: {subtarea.descripcion}</Text>
      <Text>Estado: {subtarea.estado}</Text>
    </View>
  );
}
