import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Main } from "./components/Main";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <StatusBar style="auto" />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
