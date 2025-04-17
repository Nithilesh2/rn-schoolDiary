import React, { useRef, useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Agenda } from "react-native-calendars"

const Homework = () => {
  const today = new Date().toISOString().split("T")[0]
  const [selectedDate, setSelectedDate] = useState(today)

  const rawItems = {
    "2025-03-30": [
      { name: "English - Grammar Worksheet", height: 90 },
      { name: "Math - Solve Chapter 3", height: 90 },
    ],
    "2025-04-01": [
      { name: "English - Grammar Worksheet", height: 90 },
      { name: "Math - Solve Chapter 3", height: 90 },
    ],
    "2025-04-02": [{ name: "Science - Lab Report Submission", height: 90 }],
    "2025-04-03": [
      { name: "History - Write about World War II", height: 90 },
      { name: "Math - Integration Practice", height: 90 },
    ],
    "2025-04-04": [{ name: "English - Essay on Climate Change", height: 90 }],
    "2025-04-05": [
      { name: "Computer - HTML Practice", height: 90 },
      { name: "Science - Chapter 6 Revision", height: 90 },
    ],
    "2025-04-06": [],
    "2025-04-07": [{ name: "English - Read Chapter 5", height: 90 }],
    "2025-04-08": [
      { name: "Math - Differentiation Practice", height: 90 },
      { name: "Science - Notes for Chapter 7", height: 90 },
    ],
    "2025-04-09": [{ name: "History - Timeline Assignment", height: 90 }],
    "2025-04-10": [
      { name: "Math - Worksheet 4", height: 90 },
      { name: "Computer - JavaScript Basics", height: 90 },
    ],
    "2025-04-11": [{ name: "Science - Diagram Labeling", height: 90 }],
    "2025-04-12": [{ name: "English - Write a Poem", height: 90 }],
    "2025-04-13": [],
    "2025-04-14": [{ name: "Math - Solve Exercise 7.2", height: 90 }],
    "2025-04-15": [{ name: "Science - Prepare for Quiz", height: 90 }],
    "2025-04-16": [
      { name: "English - Story Writing", height: 90 },
      { name: "History - Chapter 4 Summary", height: 90 },
    ],
    "2025-04-17": [{ name: "Math - Practice Integration", height: 90 }],
    "2025-04-18": [],
    "2025-04-19": [
      { name: "English - Essay on AI", height: 90 },
      { name: "Math - Integration Worksheet", height: 90 },
      { name: "Science - Read Chapter 4", height: 90 },
    ],
    "2025-04-20": [
      { name: "History - Write about French Revolution", height: 90 },
    ],
    "2025-04-21": [
      { name: "Math - Solve Mock Test", height: 90 },
      { name: "Computer - CSS Styling Task", height: 90 },
    ],
    "2025-04-22": [{ name: "Science - Finish Lab Manual", height: 90 }],
    "2025-04-23": [],
    "2025-04-24": [{ name: "English - Reading Comprehension", height: 90 }],
    "2025-04-25": [
      { name: "Math - Formula Memorization", height: 90 },
      { name: "Science - Worksheet on Physics", height: 90 },
    ],
    "2025-04-26": [{ name: "History - Map Labeling", height: 90 }],
    "2025-04-27": [],
    "2025-04-28": [{ name: "Computer - Create Web Page", height: 90 }],
    "2025-04-29": [{ name: "English - Vocabulary Exercise", height: 90 }],
    "2025-04-30": [
      { name: "Math - Final Revision Notes", height: 90 },
      { name: "Science - Group Activity Prep", height: 90 },
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
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
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

      <TouchableOpacity style={styles.todayButton} onPress={scrollToToday}>
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
    backgroundColor: "#fff",
    padding: 15,
    marginRight: 10,
    marginTop: 17,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    minHeight: 90,
  },
  itemText: {
    fontSize: 16,
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
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 5,
  },
  todayButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
})

export default Homework
