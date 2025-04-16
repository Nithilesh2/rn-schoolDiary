import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";

const Homework = () => {
  const [items, setItems] = useState({
    "2025-01-24": [{ name: "Math - Algebra Homework", height: 80 }],
    "2025-04-16": [{ name: "Math - Algebra Homework", height: 80 }],
    "2025-04-17": [{ name: "Science - Chapter 5 Notes", height: 60 }],
    "2025-04-18": [],
    "2025-04-19": [{ name: "English - Essay on AI", height: 70 }],
  });

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <Agenda
      items={items}
      selected={"2025-04-16"}
      renderItem={renderItem}
      renderEmptyDate={() => (
        <View style={styles.empty}>
          <Text>No Homework</Text>
        </View>
      )}
      theme={{
        agendaDayTextColor: "#333",
        agendaDayNumColor: "#333",
        agendaTodayColor: "#0080ff",
        agendaKnobColor: "#0080ff",
      }}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default Homework;
