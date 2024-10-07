import { Text, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeaderBar isMain={true} title="Travel Maiker"/>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
