import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function Home() {
  const insets = useSafeAreaInsets();
  const [selectedPhase, setSelectedPhase] = useState("follicular");

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const phaseColors = {
    menstruation: "#E45A68",
    follicular: "#F7A8C8",
    ovulation: "#6BBF82",
    luteal: "#F2C94C",
  };

  const phaseMessages = {
    menstruation: "Rest and restore — your body is working hard.",
    follicular: "Energy is rising! Great time to try new things.",
    ovulation:
      "Peak ovulation energy! Perfect time for strength or creativity.",
    luteal: "Your luteal phase is beginning — take it gently today.",
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingTop: insets.top }}
    >
      <StatusBar style="dark" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 16 }}
        >
          <Text
            style={{
              fontFamily: "Cambria",
              fontSize: 28,
              color: "#1A1A1A",
              marginBottom: 4,
            }}
          >
            {getGreeting()}, Kabuki 💛
          </Text>
        </View>

        {/* Today's Focus Card */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              backgroundColor: "#F7E967",
              borderRadius: 16,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            <Text
              style={{
                fontFamily: "Alegreya",
                fontSize: 16,
                color: "#1A1A1A",
                lineHeight: 24,
              }}
            >
              {phaseMessages[selectedPhase]}
            </Text>
          </View>
        </View>

        {/* Interactive Cycle Ring */}
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <View
            style={{
              width: 280,
              height: 280,
              borderRadius: 140,
              borderWidth: 24,
              borderColor: phaseColors[selectedPhase],
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Text
              style={{
                fontFamily: "Georgia",
                fontSize: 18,
                color: "#1A1A1A",
                marginBottom: 8,
              }}
            >
              Day 12
            </Text>
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 22,
                color: "#1A1A1A",
                textAlign: "center",
              }}
            >
              Follicular Phase
            </Text>
          </View>

          {/* Phase selector dots */}
          <View style={{ flexDirection: "row", marginTop: 20, gap: 12 }}>
            {Object.keys(phaseColors).map((phase) => (
              <TouchableOpacity
                key={phase}
                onPress={() => setSelectedPhase(phase)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: phaseColors[phase],
                  opacity: selectedPhase === phase ? 1 : 0.3,
                }}
              />
            ))}
          </View>
        </View>

        {/* Phase Card */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: 16,
              padding: 20,
              borderWidth: 1,
              borderColor: "#E5E5E5",
            }}
          >
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 20,
                color: "#1A1A1A",
                marginBottom: 16,
              }}
            >
              Hormone Graph
            </Text>

            {/* Simple hormone visualization */}
            <View style={{ marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: "#F7A8C8",
                    marginRight: 8,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Alegreya",
                    fontSize: 14,
                    color: "#1A1A1A",
                  }}
                >
                  Estrogen
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: "#792A64",
                    marginRight: 8,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Alegreya",
                    fontSize: 14,
                    color: "#1A1A1A",
                  }}
                >
                  Progesterone
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: "#6BBF82",
                    marginRight: 8,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Alegreya",
                    fontSize: 14,
                    color: "#1A1A1A",
                  }}
                >
                  LH
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontFamily: "Alegreya",
                fontSize: 15,
                color: "#1A1A1A",
                marginBottom: 12,
                lineHeight: 22,
              }}
            >
              Your energy is building as estrogen rises. This is a great time to
              challenge yourself with new workouts or creative projects.
            </Text>

            <View style={{ marginBottom: 8 }}>
              <Text
                style={{
                  fontFamily: "Georgia",
                  fontSize: 14,
                  color: "#792A64",
                  marginBottom: 4,
                }}
              >
                Recommended workout intensity: Moderate to High
              </Text>
              <Text
                style={{
                  fontFamily: "Georgia",
                  fontSize: 14,
                  color: "#792A64",
                  marginBottom: 4,
                }}
              >
                Sleep: 7-8 hours
              </Text>
              <Text
                style={{
                  fontFamily: "Georgia",
                  fontSize: 14,
                  color: "#792A64",
                }}
              >
                Mood: Optimistic, energized
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#F7A8C8",
                borderRadius: 12,
                paddingVertical: 14,
                alignItems: "center",
                marginTop: 16,
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
                Track my experiences
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Previous Workout Card */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              backgroundColor: "#1A1A1A",
              borderRadius: 16,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: "#FFFFFF",
                marginBottom: 12,
              }}
            >
              Last Workout
            </Text>
            <Text
              style={{
                fontFamily: "Alegreya",
                fontSize: 14,
                color: "#B0B0B0",
                marginBottom: 16,
              }}
            >
              Lower 🦵🏾 body • 2 days ago
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#F7A8C8",
                borderRadius: 12,
                paddingVertical: 14,
                alignItems: "center",
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
                Track workout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
