import React from "react"
import { View, Dimensions } from "react-native"
import { BarChart } from "react-native-chart-kit"
import colors from "../constants/colors"

const AttendanceGraph = ({ present, absent }) => {
  const screenWidth = Dimensions.get("window").width - 32

  return (
    <View>
      <BarChart
        data={{
          labels: ["Present", "Absent"],
          datasets: [{ data: [present, absent] }],
        }}
        width={screenWidth}
        height={220}
        fromZero
        yAxisLabel=""
        chartConfig={{
          backgroundColor: colors.background,
          backgroundGradientFrom: colors.background,
          backgroundGradientTo: colors.background,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: () => colors.textPrimary,
          barPercentage: 2,
        }}
        style={{
          borderRadius: 12,
          marginTop: 10,
        }}
      />
    </View>
  )
}

export default AttendanceGraph
