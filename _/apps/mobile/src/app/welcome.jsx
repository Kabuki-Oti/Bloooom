import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function Welcome() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F7A8C8",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar style="dark" />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        {/* Logo */}
        <Text style={{ fontSize: 80, marginBottom: 20 }}>🌸</Text>

        {/* App Name */}
        <Text
          style={{
            fontFamily: "Cambria",
            fontSize: 56,
            color: "#FFFFFF",
            marginBottom: 16,
          }}
        >
          Bloooom
        </Text>

        {/* Tagline */}
        <Text
          style={{
            fontFamily: "Alegreya",
            fontSize: 18,
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: 60,
            lineHeight: 26,
          }}
        >
          The Ultimate Period, Cycle and Fitness Tracking App
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => router.push("/signup")}
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            paddingVertical: 18,
            paddingHorizontal: 60,
            marginBottom: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Cambria",
              fontSize: 18,
              color: "#F7A8C8",
              fontWeight: "600",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Login Section */}
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Alegreya",
              fontSize: 16,
              color: "#FFFFFF",
              marginBottom: 8,
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              // TODO: Navigate to login
              console.log("Navigate to login");
            }}
          >
            <Text
              style={{
                fontFamily: "Alegreya",
                fontSize: 16,
                color: "#FFFFFF",
                fontWeight: "600",
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
