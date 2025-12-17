import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { BookOpen, TrendingUp, HelpCircle } from "lucide-react-native";
import { useState } from "react";

export default function BloomVerse() {
  const insets = useSafeAreaInsets();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const phases = [
    { name: "Menstruation", color: "#E45A68", emoji: "🌙" },
    { name: "Follicular", color: "#F7A8C8", emoji: "🌸" },
    { name: "Ovulation", color: "#6BBF82", emoji: "🌼" },
    { name: "Luteal", color: "#F2C94C", emoji: "🌻" },
  ];

  const faqs = [
    {
      question: "Why does my cycle fluctuate?",
      answer:
        "Cycle length can vary due to stress, sleep, nutrition, exercise intensity, and hormonal changes. A variation of 2-3 days is completely normal.",
    },
    {
      question: "What does PMS really mean?",
      answer:
        "PMS (Premenstrual Syndrome) refers to physical and emotional symptoms that occur in the luteal phase, typically 1-2 weeks before your period. It's caused by hormonal changes, particularly the drop in estrogen and progesterone.",
    },
    {
      question: "Why do my workouts feel harder during luteal?",
      answer:
        "During the luteal phase, progesterone rises and can affect your energy levels, body temperature, and recovery. Your body is working harder, so it's natural to feel less energized. Listen to your body and adjust intensity.",
    },
  ];

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
            BloomVerse
          </Text>
          <Text
            style={{ fontFamily: "Alegreya", fontSize: 16, color: "#792A64" }}
          >
            Education, Analysis & FAQs
          </Text>
        </View>

        {/* Cycle Statistics */}
        <View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <TrendingUp size={24} color="#792A64" />
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 22,
                color: "#1A1A1A",
                marginLeft: 8,
              }}
            >
              Cycle Statistics
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: 16,
              padding: 20,
              borderWidth: 1,
              borderColor: "#E5E5E5",
            }}
          >
            <View style={{ marginBottom: 16 }}>
              <Text
                style={{
                  fontFamily: "Georgia",
                  fontSize: 14,
                  color: "#792A64",
                  marginBottom: 4,
                }}
              >
                Cycle Length
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 18,
                  color: "#1A1A1A",
                }}
              >
                28 days
              </Text>
            </View>

            <View style={{ marginBottom: 16 }}>
              <Text
                style={{
                  fontFamily: "Georgia",
                  fontSize: 14,
                  color: "#792A64",
                  marginBottom: 4,
                }}
              >
                Cycle Length Variation
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 18,
                  color: "#1A1A1A",
                }}
              >
                ± 2 days
              </Text>
            </View>

            <View style={{ marginBottom: 16 }}>
              <Text
                style={{
                  fontFamily: "Georgia",
                  fontSize: 14,
                  color: "#792A64",
                  marginBottom: 4,
                }}
              >
                Current Phase
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 18,
                  color: "#1A1A1A",
                }}
              >
                Follicular (Day 12)
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: "Georgia",
                  fontSize: 14,
                  color: "#792A64",
                  marginBottom: 4,
                }}
              >
                Predicted Next Phase
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 18,
                  color: "#1A1A1A",
                }}
              >
                Ovulation in 2 days
              </Text>
            </View>
          </View>
        </View>

        {/* About Each Phase */}
        <View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <BookOpen size={24} color="#792A64" />
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 22,
                color: "#1A1A1A",
                marginLeft: 8,
              }}
            >
              About Each Phase
            </Text>
          </View>

          <View style={{ gap: 12 }}>
            {phases.map((phase, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: phase.color,
                  borderRadius: 16,
                  padding: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 32, marginRight: 12 }}>
                    {phase.emoji}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Cambria",
                      fontSize: 20,
                      color: "#FFFFFF",
                    }}
                  >
                    {phase.name}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: "Alegreya",
                    fontSize: 16,
                    color: "#FFFFFF",
                  }}
                >
                  →
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* FAQs */}
        <View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <HelpCircle size={24} color="#792A64" />
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 22,
                color: "#1A1A1A",
                marginLeft: 8,
              }}
            >
              FAQs
            </Text>
          </View>

          <View style={{ gap: 12 }}>
            {faqs.map((faq, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  setExpandedFAQ(expandedFAQ === index ? null : index)
                }
                style={{
                  backgroundColor: "#F7F7F7",
                  borderRadius: 16,
                  padding: 20,
                  borderWidth: 1,
                  borderColor: expandedFAQ === index ? "#792A64" : "#E5E5E5",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Cambria",
                      fontSize: 16,
                      color: "#1A1A1A",
                      flex: 1,
                      marginRight: 12,
                    }}
                  >
                    {faq.question}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Alegreya",
                      fontSize: 20,
                      color: "#792A64",
                    }}
                  >
                    {expandedFAQ === index ? "−" : "+"}
                  </Text>
                </View>

                {expandedFAQ === index && (
                  <Text
                    style={{
                      fontFamily: "Alegreya",
                      fontSize: 15,
                      color: "#1A1A1A",
                      marginTop: 12,
                      lineHeight: 22,
                    }}
                  >
                    {faq.answer}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
