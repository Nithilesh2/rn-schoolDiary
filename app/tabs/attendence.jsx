import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import colors from "../../constants/colors";

const attendanceData = {
  "2025-04-01": { marked: true, dotColor: colors.green, status: "present" },
  "2025-04-02": { marked: true, dotColor: colors.red, status: "absent" },
  "2025-04-03": { marked: true, dotColor: colors.green, status: "present" },
  "2025-04-04": { marked: true, dotColor: colors.green, status: "present" },
  "2025-04-05": { marked: true, dotColor: colors.red, status: "absent" },
};

const AttendanceScreen = () => {
  const [markedDates, setMarkedDates] = useState(attendanceData);
  const today = new Date().toISOString().split("T")[0];

  const totalDays = Object.keys(markedDates).length;
  const presentDays = Object.values(markedDates).filter(
    (day) => day.status === "present"
  ).length;
  const absentDays = totalDays - presentDays;
  const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

  const DayComponent = ({ date, state, marking }) => {
    return (
      <View style={styles.dayContainer}>
        <Text
          style={[
            styles.dayText,
            state === "today" && styles.todayText,
            marking?.status === "absent" && styles.absentDayText,
          ]}
        >
          {date.day}
        </Text>
        {marking?.marked && (
          <View
            style={[
              styles.dot,
              { backgroundColor: marking.dotColor },
            ]}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={today}
        markedDates={markedDates}
        markingType={"custom"}
        dayComponent={DayComponent}
        onDayPress={(day) => {
          console.log("Selected day", day);
        }}
        theme={{
          todayTextColor: colors.primary,
          arrowColor: colors.indigo,
          textDayFontFamily: "IndieFlower_400Regular",
          textMonthFontFamily: "IndieFlower_400Regular",
          textDayHeaderFontFamily: "IndieFlower_400Regular",
        }}
      />

      <ScrollView style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Attendance Summary</Text>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Total Working Days: </Text>
            <Text style={styles.value}>{totalDays}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Present: </Text>
            <Text style={styles.value}>{presentDays}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Absent: </Text>
            <Text style={styles.value}>{absentDays}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Attendance Percentage: </Text>
            <Text style={styles.value}>{attendancePercentage}%</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  dayContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 36,
  },
  dayText: {
    fontSize: 16,
    fontFamily: "IndieFlower_400Regular",
    color: colors.textPrimary,
  },
  absentDayText: {
    backgroundColor: colors.red,
    color: colors.white,
    borderRadius: 18,
    width: 36,
    height: 36,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 36,
  },
  todayText: {
    color: colors.primary,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: "absolute",
    bottom: 2,
  },
  summaryContainer: {
    marginTop: 20,
  },
  summaryCard: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 22,
    fontFamily: "IndieFlower_400Regular",
    color: colors.indigo,
    marginBottom: 12,
  },
  summaryItem: {
    flexDirection: "row",
    marginVertical: 6,
  },
  label: {
    fontSize: 18,
    color: colors.textPrimary,
    fontFamily: "IndieFlower_400Regular",
  },
  value: {
    fontSize: 18,
    color: colors.textPrimary,
    fontFamily: "IndieFlower_400Regular",
    fontWeight: "bold",
  },
});

export default AttendanceScreen;