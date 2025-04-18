import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import Holidays from "../../../assets/image/holiday.png"
import Exams from "../../../assets/image/exams.png"
import Announcements from "../../../assets/image/announcements.png"
import colors from "../../../constants/colors"
import { useRouter } from "expo-router"

const NoticesScreen = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.card}
        onPress={() => router.push("/tabs/notices/holidays")}
      >
        <View style={styles.left}>
          <Image source={Holidays} style={styles.image} />
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>Holidays</Text>
          <Text style={styles.description}>View upcoming school holidays</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.card}
        onPress={() => router.push("/tabs/notices/exams")}
      >
        <View style={styles.left}>
          <Image source={Exams} style={styles.image} />
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>Exams</Text>
          <Text style={styles.description}>Check the exam schedules</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.card}
        onPress={() => router.push("/tabs/notices/announcements")}
      >
        <View style={styles.left}>
          <Image source={Announcements} style={styles.image} />
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>Announcements</Text>
          <Text style={styles.description}>Latest updates and news</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NoticesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  left: {
    width: "30%",
  },
  right: {
    width: "70%",
  },
  image: {
    height: 60,
    width: 70,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "IndieFlower_400Regular",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
    fontFamily: "IndieFlower_400Regular",
  },
})
