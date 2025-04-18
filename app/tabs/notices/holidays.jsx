import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import colors from "../../../constants/colors"
import ArrowLeftIcon from "./../../../assets/icons/ArrowLeft"
import { useRouter } from "expo-router"

const holidays = [
  { date: "2025-01-01", title: "New Year's Day" },
  { date: "2025-01-14", title: "Makar Sankranti / Pongal" },
  { date: "2025-01-26", title: "Republic Day" },
  { date: "2025-03-17", title: "Holi" },
  { date: "2025-04-14", title: "Ambedkar Jayanti" },
  { date: "2025-04-18", title: "Good Friday" },
  { date: "2025-05-01", title: "Labour Day" },
  { date: "2025-06-16", title: "Bakrid / Eid al-Adha" },
  { date: "2025-08-15", title: "Independence Day" },
  { date: "2025-08-19", title: "Raksha Bandhan" },
  { date: "2025-08-29", title: "Janmashtami" },
  { date: "2025-10-02", title: "Gandhi Jayanti" },
  { date: "2025-10-21", title: "Dussehra" },
  { date: "2025-10-31", title: "Diwali" },
  { date: "2025-11-01", title: "Govardhan Puja" },
  { date: "2025-11-03", title: "Bhai Dooj" },
  { date: "2025-12-25", title: "Christmas" },
]

export default function HolidayScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ArrowLeftIcon
          height={28}
          width={28}
          onPress={() => router.replace("/tabs/notices/")}
        />
        <Text style={styles.heading}>Holiday List</Text>
      </View>
      <FlatList
        data={holidays}
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
