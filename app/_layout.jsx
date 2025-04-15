import { View, Text, StatusBar } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const _layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
      </Stack>
      <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
    </>
  )
}

export default _layout
