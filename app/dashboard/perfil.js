import { Image, Text, View } from "react-native";

export default function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{ uri: "https://placekitten.com/200/200" }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={{ marginTop: 10 }}>Usuario: user1</Text>
    </View>
  );
}
