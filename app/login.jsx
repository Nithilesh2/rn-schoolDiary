import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native"
import React, { useState } from "react"
import colors from "../constants/colors"
import loginImage from "../assets/image/login.png"
import EyeOpenIcon from "../assets/icons/EyeOpen"
import EyeCloseIcon from "../assets/icons/EyeClose"
import { useRouter } from "expo-router"
import { Dropdown } from "react-native-element-dropdown"
import AntDesign from "@expo/vector-icons/AntDesign"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  const router = useRouter()

  const data = [
    { label: "Siddhartha High School", value: "1" },
    { label: "Green Valley Public School", value: "2" },
    { label: "Bluebell International School", value: "3" },
    { label: "St. Joseph's Convent", value: "4" },
    { label: "Oakridge Global School", value: "5" },
    { label: "Sunshine High School", value: "6" },
    { label: "Vivekananda Vidyalaya", value: "7" },
    { label: "Cambridge International Academy", value: "8" },
    { label: "Mount Carmel School", value: "9" },
    { label: "Little Flower High School", value: "10" },
    { label: "Genius Public School", value: "11" },
    { label: "Delhi World Public School", value: "12" },
    { label: "Silver Oak International", value: "13" },
    { label: "Global Wisdom School", value: "14" },
    { label: "Harmony International Academy", value: "15" },
    { label: "Riverdale High School", value: "16" },
  ] 

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={loginImage} style={styles.loginImage} />

        <View style={styles.formContainer}>
          <Text style={styles.title}>School</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: colors.indigo }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select school" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value)
              setIsFocus(false)
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? colors.indigo : "black"}
                name="enviromento"
                size={20}
              />
            )}
            containerStyle={styles.dropdownContainer}
            itemTextStyle={styles.itemTextStyle}
            activeColor={colors.indigoLight}
            keyboardAvoiding={Platform.OS === "ios"}
            flatListProps={{
              keyboardShouldPersistTaps: "always",
            }}
          />

          <Text style={styles.title}>Student/Teacher ID</Text>
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
            onPress={() => router.replace("tabs")}
          >
            <Text style={styles.button}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    marginBottom: 5,
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
  dropdown: {
    height: 45,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
  },
  dropdownContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 0,
  },
  itemTextStyle: {
    color: colors.textPrimary,
  },
})
