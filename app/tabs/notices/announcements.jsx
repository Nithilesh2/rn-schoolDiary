import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import colors from "../../../constants/colors"
import ArrowLeftIcon from "./../../../assets/icons/ArrowLeft"
import { useRouter } from "expo-router"

const announcements = [
  { date: "2025-01-05", title: "School reopening after winter break" },
  { date: "2025-03-01", title: "Annual Day Celebration" },
  { date: "2025-06-01", title: "New Academic Year Begins" },
  { date: "2025-09-10", title: "Parent-Teacher Meeting" },
  { date: "2025-11-20", title: "Science Exhibition" },
]

export default function AnnouncementScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ArrowLeftIcon
          height={28}
          width={28}
          onPress={() => router.replace("/tabs/notices/")}
        />
        <Text style={styles.heading}>Announcements</Text>
        <View style={{ width: 28 }} />
      </View>
      <FlatList
        data={announcements}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  top: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  heading: {
    flex: 1,
    fontSize: 30,
    color: colors.indigo,
    textAlign: "center",
    fontFamily: "IndieFlower_400Regular",
    marginRight: 18,
  },
  card: {
    backgroundColor: colors.white,
    padding: 15,
    marginTop: 17,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontFamily: "IndieFlower_400Regular",
    color: colors.textPrimary,
  },
  date: {
    marginTop: 4,
    fontSize: 16,
    color: colors.textPrimary,
    fontFamily: "IndieFlower_400Regular",
  },
})
