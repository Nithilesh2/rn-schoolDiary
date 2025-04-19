import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import AccountIcon from './../../assets/icons/Account';
import PrivacyPolicyIcon from './../../assets/icons/PrivacyPolicy';
import LogoutIcon from './../../assets/icons/Logout';
import colors from "../../constants/colors";

const tempName = "John Doe";
const tempEmail = "johndoe@example.com";
const tempProfilePic = require("../../assets/image/login.png");

const index = () => {
  const [showLogout, setShowLogout] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login')
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { opacity: showLogout ? 0.2 : 1 }]}
      >
        <View style={styles.top}>
          <View style={styles.topLeftContainer}>
            <View style={styles.userIconContainer}>
              <Image source={tempProfilePic} style={styles.userImg} />
            </View>
            <View style={styles.userNameContainer}>
              <Text style={styles.userNameText}>{tempName}</Text>
              <Text style={styles.userEmailText}>{tempEmail}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.bottomContainer, { elevation: showLogout ? 0 : 5 }]}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.containers}
            onPress={() => router.push("/tabs/settings")}
          >
            <View style={styles.iconBox}>
              <AccountIcon width={34} height={34} color={colors.indigo} />
            </View>
            <Text style={styles.containerText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.containers}
            onPress={() => router.push("/tabs/settings")}
          >
            <View style={styles.iconBox}>
              <PrivacyPolicyIcon width={34} height={34} color={colors.indigo} />
            </View>
            <Text style={styles.containerText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.containers}
            onPress={() => setShowLogout(true)}
          >
            <View style={styles.iconBoxLogout}>
              <LogoutIcon width={34} height={34} color="red" />
            </View>
            <Text style={styles.containerText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
          <Text style={styles.versionText}>School Diary</Text>
        </View>
      </ScrollView>

      {showLogout && (
        <>
          <View style={styles.overlay} />
          <View style={styles.logoutContainer}>
            <Text style={styles.logout}>Logout</Text>
            <Text style={styles.logoutText}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.logoutButtonsContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.logoutButtonNo}
                onPress={() => setShowLogout(false)}
              >
                <Text style={styles.logoutButtonTextNo}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.logoutButtonYes}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonTextYes}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 17,
    position: "relative",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  topLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userIconContainer: {
    borderRadius: 50,
    padding: 5,
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  userNameContainer: {
    width: "100%",
  },
  userNameText: {
    fontFamily: "IndieFlower_400Regular",
    fontSize: 24,
    color: "black",
  },
  userEmailText: {
    fontFamily: "IndieFlower_400Regular",
    fontSize: 18,
    color: colors.indigo,
  },
  bottomContainer: {
    marginHorizontal: 5,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: "#F2F2F2",
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 30,
    width: "95%",
    alignSelf: "center",
  },
  containers: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 20,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "rgba(127, 61, 255,0.14)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  iconBoxLogout: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "rgba(255, 0, 0,0.14)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  containerText: {
    fontFamily: "IndieFlower_400Regular",
    fontSize: 18,
    color: "black",
    marginLeft: 10,
    textTransform: "capitalize",
  },
  logout: {
    fontFamily: "IndieFlower_400Regular",
    fontSize: 22,
    color: "black",
    marginBottom: 15,
    marginLeft: 10,
    textAlign: "center",
    width: "100%",
  },
  logoutContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 5,
    width: "100%",
    alignSelf: "center",
    zIndex: 9999,
    position: "absolute",
    bottom: 0,
    height: 200,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 999,
  },
  logoutText: {
    fontFamily: "IndieFlower_400Regular",
    fontSize: 18,
    color: "grey",
    textAlign: "center",
    marginBottom: 15,
  },
  logoutButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    marginTop: 10,
    width: "100%",
  },
  logoutButtonNo: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    width: 130,
  },
  logoutButtonYes: {
    backgroundColor: colors.indigo,
    padding: 10,
    borderRadius: 10,
    width: 130,
  },
  logoutButtonTextNo: {
    fontFamily: "IndieFlower_400Regular",
    fontSize: 16,
    color: colors.indigo,
    textAlign: "center",
  },
  logoutButtonTextYes: {
    fontFamily: "IndieFlower_400Regular",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  versionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    gap: 15,
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignSelf: "center",
  },
  versionText: {
    fontFamily: "IndieFlower_400Regular",
    fontSize: 16,
    color: "grey",
    marginBottom: 5,
  },
});


