import React, { useRef, useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Agenda } from "react-native-calendars"
import colors from "../../constants/colors"

const Homework = () => {
  const today = new Date().toISOString().split("T")[0]
  const [selectedDate, setSelectedDate] = useState(today)

  const rawItems = {
    "2025-03-30": [
      { name: "English - Grammar Worksheet" },
      { name: "Math - Solve Chapter 3" },
    ],
    "2025-04-01": [
      { name: "English - Grammar Worksheet" },
      { name: "Math - Solve Chapter 3" },
    ],
    "2025-04-02": [{ name: "Science - Lab Report Submission" }],
    "2025-04-03": [
      { name: "History - Write about World War II" },
      { name: "Math - Integration Practice" },
    ],
    "2025-04-04": [{ name: "English - Essay on Climate Change" }],
    "2025-04-05": [
      { name: "Computer - HTML Practice" },
      { name: "Science - Chapter 6 Revision" },
    ],
    "2025-04-06": [],
    "2025-04-07": [{ name: "English - Read Chapter 5" }],
    "2025-04-08": [
      { name: "Math - Differentiation Practice" },
      { name: "Science - Notes for Chapter 7" },
    ],
    "2025-04-09": [{ name: "History - Timeline Assignment" }],
    "2025-04-10": [
      { name: "Math - Worksheet 4" },
      { name: "Computer - JavaScript Basics" },
    ],
    "2025-04-11": [{ name: "Science - Diagram Labeling" }],
    "2025-04-12": [{ name: "English - Write a Poem" }],
    "2025-04-13": [],
    "2025-04-14": [{ name: "Math - Solve Exercise 7.2" }],
    "2025-04-15": [{ name: "Science - Prepare for Quiz" }],
    "2025-04-16": [
      { name: "English - Story Writing" },
      { name: "History - Chapter 4 Summary" },
    ],
    "2025-04-17": [{ name: "Math - Practice Integration" }],
    "2025-04-18": [],
    "2025-04-19": [
      { name: "English - Essay on AI" },
      { name: "Math - Integration Worksheet" },
      { name: "Science - Read Chapter 4" },
    ],
    "2025-04-20": [{ name: "History - Write about French Revolution" }],
    "2025-04-21": [
      { name: "Math - Solve Mock Test" },
      { name: "Computer - CSS Styling Task" },
    ],
    "2025-04-22": [{ name: "Science - Finish Lab Manual" }],
    "2025-04-23": [],
    "2025-04-24": [{ name: "English - Reading Comprehension" }],
    "2025-04-25": [
      { name: "Math - Formula Memorization" },
      { name: "Science - Worksheet on Physics" },
    ],
    "2025-04-26": [{ name: "History - Map Labeling" }],
    "2025-04-27": [],
    "2025-04-28": [{ name: "Computer - Create Web Page" }],
    "2025-04-29": [{ name: "English - Vocabulary Exercise" }],
    "2025-04-30": [
      { name: "Math - Final Revision Notes" },
      { name: "Science - Group Activity Prep" },
    ],
  }

  const getAgendaItems = () => {
    const rawKeys = Object.keys(rawItems).sort()
    const start = new Date(rawKeys[0])
    const end = new Date(rawKeys[rawKeys.length - 1])

    const result = {}

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0]
      result[dateStr] = rawItems[dateStr] || []
    }
    return result
  }

  const renderItem = (item) => (
    <>
      <View style={styles.item}>
        <Text style={styles.itemText} selectable>
          {item.name}
        </Text>
      </View>
    </>
  )

  const scrollToToday = () => {
    if (selectedDate === today) {
      setSelectedDate("")
      setTimeout(() => {
        setSelectedDate(today)
      }, 10)
    } else {
      setSelectedDate(today)
    }
  }

  const rawKeys = Object.keys(rawItems).sort()

  return (
    <View style={styles.container}>
      <Agenda
        items={getAgendaItems()}
        selected={selectedDate}
        renderItem={renderItem}
        renderEmptyDate={() => (
          <View style={styles.empty}>
            <Text>No Homework</Text>
          </View>
        )}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        minDate={rawKeys[0]}
        maxDate={rawKeys[rawKeys.length - 1]}
        theme={{
          agendaDayTextColor: "#333",
          agendaDayNumColor: "#6200ee",
          agendaTodayColor: "#e91e63",
          agendaKnobColor: "#6200ee",
          backgroundColor: "#f0f0f0",
          calendarBackground: "#fff",
          textSectionTitleColor: "#b6c1cd",
          dayTextColor: "#2d4150",
          selectedDayBackgroundColor: "#6200ee",
          selectedDayTextColor: "#ffffff",
          dotColor: "#6200ee",
          textDisabledColor: "#d9e1e8",
        }}
      />

      <TouchableOpacity activeOpacity={0.9} style={styles.todayButton} onPress={scrollToToday}>
        <Text style={styles.todayButtonText}>Today</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: colors.white,
    padding: 15,
    marginRight: 10,
    marginTop: 17,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    minHeight: 50,
  },
  itemText: {
    fontSize: 16,
    fontFamily: "IndieFlower_400Regular",
  },
  empty: {
    height: 50,
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  todayButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.indigo,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 5,
  },
  todayButtonText: {
    color: "#fff",
    fontFamily: "IndieFlower_400Regular"
  },
})

export default Homework
