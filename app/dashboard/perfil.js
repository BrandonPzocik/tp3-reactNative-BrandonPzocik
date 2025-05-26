import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="person" size={100} color="black" />
      <Text style={{ marginTop: 10 }}>Usuario: user1</Text>
    </View>
  );
}
