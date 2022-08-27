import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "./screens/HomeScreen";
import { FullPostScreen } from "./screens/FullPostScreen";
import Navigation from "./screens/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
