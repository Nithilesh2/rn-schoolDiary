import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native"
import React, { useState } from "react"
import colors from "./../../constants/colors"
import AttendenceCalendar from "../../components/AttendenceCalendar"
import AttendanceGraph from "../../components/AttendenceGraph"
import HeapAttendanceGraph from "../../components/HeapAttendanceGraph"

const attendence = () => {
  const [selectedGraph, setSelectedGraph] = useState("bar")
  const presentCount = 15
  const absentCount = 5
  const totalDays = presentCount + absentCount
  const percentage = ((presentCount / totalDays) * 100).toFixed(1)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.stats}>
          <View style={styles.presentAndAbsentContainer}>
            <View style={[styles.presentContainer, styles.containers]}>
              <Text style={styles.label}>Present</Text>
              <Text style={styles.label}>{presentCount}</Text>
            </View>
            <View style={[styles.absentContainer, styles.containers]}>
              <Text style={styles.label}>Absent</Text>
              <Text style={styles.label}>{absentCount}</Text>
            </View>
          </View>
          <View style={styles.percentContainer}>
            <Text style={styles.label}>Attendance</Text>
            <Text style={styles.label}>{percentage}%</Text>
          </View>
        </View>

        <AttendenceCalendar />

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.toggleButton,
              selectedGraph === "bar" && styles.selectedButton,
            ]}
            onPress={() => setSelectedGraph("bar")}
          >
            <Text
              style={[
                styles.toggleText,
                selectedGraph === "bar" && styles.selectedText,
              ]}
            >
              Bar Graph
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.toggleButton,
              selectedGraph === "heap" && styles.selectedButton,
            ]}
            onPress={() => setSelectedGraph("heap")}
          >
            <Text
              style={[
                styles.toggleText,
                selectedGraph === "heap" && styles.selectedText,
              ]}
            >
              Heap Graph
            </Text>
          </TouchableOpacity>
        </View>

        {selectedGraph === "bar" ? (
          <AttendanceGraph present={presentCount} absent={absentCount} />
        ) : (
          <HeapAttendanceGraph present={presentCount} absent={absentCount} />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default attendence

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  stats: {
    height: 170,
    marginTop: 10,
    gap: 15,
  },
  presentAndAbsentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  containers: {
    width: 150,
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  presentContainer: {
    backgroundColor: colors.present,
  },
  absentContainer: {
    backgroundColor: colors.absent,
  },
  percentContainer: {
    backgroundColor: colors.percent,
    width: "100%",
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontFamily: "IndieFlower_400Regular",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 15,
    gap: 10,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  selectedButton: {
    backgroundColor: colors.indigo,
    color: colors.white,
  },
  toggleText: {
    color: colors.indigo,
    fontFamily: "IndieFlower_400Regular",
    fontSize: 18,
  },
  selectedText: {
    color: colors.white,
  },
})
