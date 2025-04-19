import React from "react"
import { Calendar } from "react-native-calendars"
import colors from "./../constants/colors"

const AttendenceCalendar = () => {
  const today = new Date().toISOString().split("T")[0]
  const markedDates = {
    "2025-04-17": { selected: true, selectedColor: colors.accent },
    "2025-04-10": { selected: true, selectedColor: colors.accent },
    "2025-04-01": { selected: true, selectedColor: colors.accent },
    "2025-04-02": { selected: true, selectedColor: colors.accent },
    "2025-04-03": { selected: true, selectedColor: colors.accent },
  }
  return (
    <Calendar
      style={{ borderRadius: 20, height: 350, width: 300, alignSelf: "center" }}
      onDayPress={(day) => {
        console.log(day)
      }}
      initialDate={today}
      hideExtraDays={true}
      markedDates={markedDates}
      theme={{
        textDayFontFamily: "IndieFlower_400Regular",
        textMonthFontFamily: "IndieFlower_400Regular",
        textDayHeaderFontFamily: "IndieFlower_400Regular",
      }}
    />
  )
}

export default AttendenceCalendar
