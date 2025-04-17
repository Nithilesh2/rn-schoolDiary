import React from "react"
import { Tabs } from "expo-router"
import colors from "../../constants/colors"
import HomeIcon from "../../assets/icons/Home"
import HomeWorkIcon from "./../../assets/icons/HomeWork"
import NoticeIcon from "./../../assets/icons/Notice"
import AttendenceIcon from "./../../assets/icons/Attendencs"
import SettingsIcon from "../../assets/icons/Settings"

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 55,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "IndieFlower_400Regular",
        },
        tabBarActiveTintColor: colors.indigo,
        tabBarInactiveTintColor: "#777",
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color }) => {
          let IconComponent

          switch (route.name) {
            case "index":
              IconComponent = HomeIcon
              break
            case "homework":
              IconComponent = HomeWorkIcon
              break
            case "notices":
              IconComponent = NoticeIcon
              break
            case "attendence":
              IconComponent = AttendenceIcon
              break
            case "settings":
              IconComponent = SettingsIcon
              break
          }

          return <IconComponent color={color} width={24} height={24} />
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="homework" options={{ title: "Home Work" }} />
      <Tabs.Screen name="notices" options={{ title: "Notices" }} />
      <Tabs.Screen name="attendence" options={{ title: "Attendance" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  )
}

export default _layout
