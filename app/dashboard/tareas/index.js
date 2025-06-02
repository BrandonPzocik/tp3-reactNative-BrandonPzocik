import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { tareas } from "../../../constants/tareas";

export default function TareasScreen() {
  const router = useRouter();

  return (
    <FlatList
      data={tareas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/dashboard/tareas/${item.id}`)}
        >
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text>{item.titulo}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
