import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { tareas } from "../../../../constants/tareas";

export default function SubtareasScreen() {
  const { tareaId } = useLocalSearchParams();
  const router = useRouter();

  const tarea = tareas.find((t) => t.id === tareaId);

  if (!tarea) return <Text>Tarea no encontrada</Text>;

  return (
    <FlatList
      data={tarea.subtareas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            router.push(`/dashboard/tareas/${tarea.id}/${item.id}`)
          }
        >
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text>{item.titulo}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
