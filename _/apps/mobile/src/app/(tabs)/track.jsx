import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Heart, Dumbbell, X } from "lucide-react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Track() {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const handleTrackCycle = () => {
    setVisible(false);
    router.push("/(tabs)/track-cycle");
  };

  const handleTrackWorkout = () => {
    setVisible(false);
    router.push("/(tabs)/track-workout");
  };

  const handleClose = () => {
    setVisible(false);
    router.back();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar style="light" />

        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 24,
            padding: 32,
            width: "85%",
            maxWidth: 400,
          }}
        >
          <TouchableOpacity
            onPress={handleClose}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 1,
            }}
          >
            <X size={24} color="#1A1A1A" />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "Cambria",
              fontSize: 26,
              color: "#1A1A1A",
              textAlign: "center",
              marginBottom: 32,
              marginTop: 8,
            }}
          >
            What would you like to track?
          </Text>

          <TouchableOpacity
            onPress={handleTrackCycle}
            style={{
              backgroundColor: "#F7A8C8",
              borderRadius: 16,
              padding: 24,
              marginBottom: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heart size={28} color="#FFFFFF" fill="#FFFFFF" />
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 20,
                color: "#FFFFFF",
                marginLeft: 12,
              }}
            >
              Track Cycle
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleTrackWorkout}
            style={{
              backgroundColor: "#1A1A1A",
              borderRadius: 16,
              padding: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Dumbbell size={28} color="#FFFFFF" />
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 20,
                color: "#FFFFFF",
                marginLeft: 12,
              }}
            >
              Track Workout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
