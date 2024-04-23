import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import { mainContainer } from "../constants/styles";

//common layout for all pages
//Slot refers to the navigated page
export default function HomeLayout() {
  return (
    <SafeAreaView style={mainContainer}>
      <Slot />
    </SafeAreaView>
  );
}
