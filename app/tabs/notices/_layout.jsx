import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="exams" />
      <Stack.Screen name="holidays" />
      <Stack.Screen name="announcements" />
    </Stack>
  )
}

export default _layout