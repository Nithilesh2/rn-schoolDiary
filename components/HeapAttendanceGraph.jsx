import React from "react"
import { Dimensions, View, Text, ScrollView } from "react-native"
import { ContributionGraph } from "react-native-chart-kit"
import colors from "../constants/colors";

const screenWidth = Dimensions.get("window").width

const AttendanceContributionGraph = () => {
  const attendanceData = [
    { date: "2025-04-01", count: 1 },
    { date: "2025-04-02", count: 1 },
    { date: "2025-04-03", count: 1 },
    { date: "2025-04-17", count: 1 },
    { date: "2025-04-10", count: 1 },
  ]
  const grayShades = {
    0: "#ebedf0",
    1: "#d6d8da",
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <ContributionGraph
        values={attendanceData}
        endDate={new Date()}
        numDays={360}
        width={1800} 
        height={220}
        squareSize={16}
        chartConfig={{
          backgroundColor: colors.background,
          backgroundGradientFrom: colors.background,
          backgroundGradientTo: colors.background,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: () => "#666",
        }}
        getDotColor={(value) => {
          const grayShades = {
            0: "#ebedf0",
            1: "#d6d8da",
          };
          if (!value) return grayShades[0];
          const count = Math.min(value.count, 4);
          return grayShades[count];
        }}
      />
    </ScrollView>
  )
}

export default AttendanceContributionGraph
