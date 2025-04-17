import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import React, { useEffect } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { IndieFlower_400Regular } from "@expo-google-fonts/indie-flower"
import { Poppins_500Medium } from "@expo-google-fonts/poppins"
import intro from "../assets/image/intro.png"
import colors from "../constants/colors"
import { useRouter } from "expo-router"

SplashScreen.preventAutoHideAsync()

const Index = () => {
  const router = useRouter()

  const [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
    Poppins_500Medium,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={intro} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>Welcome to School Diary</Text>
      <Text style={styles.subTitle}>Track your homework, exams, and more!</Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonContainer}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.button}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontSize: 28,
    fontFamily: "IndieFlower_400Regular",
    textAlign: "center",
    color: "black",
  },
  subTitle: {
    fontSize: 18,
    fontFamily: "IndieFlower_400Regular",
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 10,
    marginHorizontal: 30,
  },
  buttonContainer: {
    height: 45,
    width: "80%",
    backgroundColor: colors.indigo,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 150,
    elevation: 15,
  },
  button: {
    fontSize: 18,
    fontFamily: "IndieFlower_400Regular",
    color: colors.background,
  },
})
