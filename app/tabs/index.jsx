import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../../constants/colors"

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}>
          <Text style={styles.greetingsText}>Good Morning</Text>
          <Text style={styles.userText}>Bejagam</Text>
        </View>
        <View style={styles.right}></View>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
})
