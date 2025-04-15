import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import colors from "../constants/colors"
import loginImage from "../assets/image/login.png"
import EyeOpenIcon from "../assets/icons/EyeOpen"
import EyeCloseIcon from "../assets/icons/EyeClose"
import { useRouter } from "expo-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={loginImage} style={styles.loginImage} />

        <View style={styles.formContainer}>
          <Text style={styles.title}>Student ID</Text>
          <TextInput style={styles.inputBar} placeholder="21951" />

          <Text style={styles.title}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.inputBar, { paddingRight: 40 }]}
              placeholder="password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eye}
              activeOpacity={0.7}
            >
              {showPassword ? (
                <EyeCloseIcon height={22} width={22} />
              ) : (
                <EyeOpenIcon height={22} width={22} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonContainer}
            onPress={() => router.push("/")}
          >
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
  loginImage: {
    width: "90%",
    height: 310,
    alignSelf: "center",
    marginBottom: 20,
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 18,
    color: colors.textSecondary,
    fontFamily: "Poppins_500Medium",
  },
  inputBar: {
    height: 45,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  eye: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  buttonContainer: {
    height: 45,
    width: "100%",
    backgroundColor: colors.indigo,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 15,
  },
  button: {
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
    color: colors.background,
  },
})
