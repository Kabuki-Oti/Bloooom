import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ChevronLeft, Check } from "lucide-react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function TrackCycle() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [tracking, setTracking] = useState({
    period: false,
    feeling: "",
    pain: "",
    sleep: "",
    energy: "",
    pms: false,
    collectionMethod: "",
    cravings: "",
    medication: "",
  });

  const feelings = [
    "Happy",
    "Calm",
    "Anxious",
    "Sad",
    "Irritable",
    "Energized",
  ];
  const painLevels = ["None", "Mild", "Moderate", "Severe"];
  const sleepQuality = ["Poor", "Fair", "Good", "Excellent"];
  const energyLevels = ["Low", "Medium", "High", "Very High"];

  const toggleOption = (category, value) => {
    setTracking((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value,
    }));
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingTop: insets.top }}
    >
      <StatusBar style="dark" />

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={28} color="#1A1A1A" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Cambria",
            fontSize: 22,
            color: "#1A1A1A",
            marginLeft: 12,
          }}
        >
          Track Cycle
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          {/* Period */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: "#1A1A1A",
                marginBottom: 12,
              }}
            >
              Period
            </Text>
            <TouchableOpacity
              onPress={() =>
                setTracking((prev) => ({ ...prev, period: !prev.period }))
              }
              style={{
                backgroundColor: tracking.period ? "#E45A68" : "#F7F7F7",
                borderRadius: 12,
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: tracking.period ? "#FFFFFF" : "#1A1A1A",
                }}
              >
                I'm on my period today
              </Text>
              {tracking.period && <Check size={20} color="#FFFFFF" />}
            </TouchableOpacity>
          </View>

          {/* Feeling */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: "#1A1A1A",
                marginBottom: 12,
              }}
            >
              Feeling
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {feelings.map((feeling) => (
                <TouchableOpacity
                  key={feeling}
                  onPress={() => toggleOption("feeling", feeling)}
                  style={{
                    backgroundColor:
                      tracking.feeling === feeling ? "#F7A8C8" : "#F7F7F7",
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Alegreya",
                      fontSize: 15,
                      color:
                        tracking.feeling === feeling ? "#FFFFFF" : "#1A1A1A",
                    }}
                  >
                    {feeling}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Pain */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: "#1A1A1A",
                marginBottom: 12,
              }}
            >
              Pain
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {painLevels.map((level) => (
                <TouchableOpacity
                  key={level}
                  onPress={() => toggleOption("pain", level)}
                  style={{
                    backgroundColor:
                      tracking.pain === level ? "#E45A68" : "#F7F7F7",
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Alegreya",
                      fontSize: 15,
                      color: tracking.pain === level ? "#FFFFFF" : "#1A1A1A",
                    }}
                  >
                    {level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Sleep */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: "#1A1A1A",
                marginBottom: 12,
              }}
            >
              Sleep
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {sleepQuality.map((quality) => (
                <TouchableOpacity
                  key={quality}
                  onPress={() => toggleOption("sleep", quality)}
                  style={{
                    backgroundColor:
                      tracking.sleep === quality ? "#792A64" : "#F7F7F7",
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Alegreya",
                      fontSize: 15,
                      color: tracking.sleep === quality ? "#FFFFFF" : "#1A1A1A",
                    }}
                  >
                    {quality}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Energy */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: "#1A1A1A",
                marginBottom: 12,
              }}
            >
              Energy
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {energyLevels.map((level) => (
                <TouchableOpacity
                  key={level}
                  onPress={() => toggleOption("energy", level)}
                  style={{
                    backgroundColor:
                      tracking.energy === level ? "#F7E967" : "#F7F7F7",
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Alegreya",
                      fontSize: 15,
                      color: "#1A1A1A",
                    }}
                  >
                    {level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* PMS */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: "#1A1A1A",
                marginBottom: 12,
              }}
            >
              PMS
            </Text>
            <TouchableOpacity
              onPress={() =>
                setTracking((prev) => ({ ...prev, pms: !prev.pms }))
              }
              style={{
                backgroundColor: tracking.pms ? "#B0B0B0" : "#F7F7F7",
                borderRadius: 12,
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: tracking.pms ? "#FFFFFF" : "#1A1A1A",
                }}
              >
                Experiencing PMS symptoms
              </Text>
              {tracking.pms && <Check size={20} color="#FFFFFF" />}
            </TouchableOpacity>
          </View>

          {/* Save Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: "#F7A8C8",
              borderRadius: 16,
              padding: 18,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontFamily: "Cambria", fontSize: 18, color: "#FFFFFF" }}
            >
              Save Tracking
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
