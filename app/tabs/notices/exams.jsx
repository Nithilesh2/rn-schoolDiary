import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import colors from "../../../constants/colors"
import ArrowLeftIcon from "./../../../assets/icons/ArrowLeft"
import { useRouter } from "expo-router"

const exams = [
  { date: "2025-02-10", title: "Unit Test 1" },
  { date: "2025-04-05", title: "Quarterly Exams" },
  { date: "2025-07-20", title: "Half-Yearly Exams" },
  { date: "2025-10-15", title: "Pre-Final Exams" },
  { date: "2025-12-01", title: "Final Exams" },
]

export default function ExamScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ArrowLeftIcon
          height={28}
          width={28}
          onPress={() => router.replace("/tabs/notices/")}
        />
        <Text style={styles.heading}>Exam Schedule</Text>
        <View style={{ width: 28 }} />
      </View>
      <FlatList
        data={exams}
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
