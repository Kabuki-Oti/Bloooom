import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Calendar } from "lucide-react-native";
import { useState } from "react";

export default function CalendarView() {
  const insets = useSafeAreaInsets();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const phaseColors = {
    menstruation: "#E45A68",
    follicular: "#F7A8C8",
    ovulation: "#6BBF82",
    luteal: "#F2C94C",
    pms: "#B0B0B0",
  };

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const getDayPhase = (day) => {
    // Mock data - in real app this would be calculated
    if (day >= 1 && day <= 5) return "menstruation";
    if (day >= 6 && day <= 13) return "follicular";
    if (day >= 14 && day <= 16) return "ovulation";
    if (day >= 17 && day <= 28) return "luteal";
    return null;
  };

  const hasWorkout = (day) => {
    // Mock data
    return [3, 5, 8, 10, 12, 15, 17, 19, 22].includes(day);
  };

  const days = generateCalendarDays();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
            style={{ fontFamily: "Cambria", fontSize: 28, color: "#1A1A1A" }}
          >
            Calendar
          </Text>
        </View>

        {/* Month selector */}
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "Alegreya", fontSize: 20, color: "#1A1A1A" }}
          >
            {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
          </Text>
          <Calendar size={24} color="#792A64" />
        </View>

        {/* Calendar Grid */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          {/* Day headers */}
          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <View key={index} style={{ flex: 1, alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 14,
                    color: "#B0B0B0",
                  }}
                >
                  {day}
                </Text>
              </View>
            ))}
          </View>

          {/* Calendar days */}
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {days.map((day, index) => {
              const phase = day ? getDayPhase(day) : null;
              const workout = day ? hasWorkout(day) : false;

              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: `${100 / 7}%`,
                    aspectRatio: 1,
                    padding: 4,
                  }}
                  disabled={!day}
                >
                  {day ? (
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: phase ? phaseColors[phase] : "#FFFFFF",
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Alegreya",
                          fontSize: 16,
                          color: phase ? "#FFFFFF" : "#1A1A1A",
                          fontWeight: "600",
                        }}
                      >
                        {day}
                      </Text>
                      {workout && (
                        <View
                          style={{
                            position: "absolute",
                            bottom: 4,
                            width: 6,
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: phase ? "#FFFFFF" : "#1A1A1A",
                          }}
                        />
                      )}
                    </View>
                  ) : null}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Legend */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <Text
            style={{
              fontFamily: "Cambria",
              fontSize: 18,
              color: "#1A1A1A",
              marginBottom: 12,
            }}
          >
            Legend
          </Text>
          <View style={{ gap: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: "#E45A68",
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#1A1A1A",
                }}
              >
                Menstruation
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: "#F7A8C8",
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#1A1A1A",
                }}
              >
                Follicular
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: "#6BBF82",
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#1A1A1A",
                }}
              >
                Ovulation
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: "#F2C94C",
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#1A1A1A",
                }}
              >
                Luteal
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundColor: "#B0B0B0",
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#1A1A1A",
                }}
              >
                PMS
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "#1A1A1A",
                  marginLeft: 7,
                  marginRight: 19,
                }}
              />
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#1A1A1A",
                }}
              >
                Workout logged
              </Text>
            </View>
          </View>
        </View>

        {/* Selected Day Details */}
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: "#1A1A1A",
                }}
              >
                December 15, 2025
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: "#792A64",
                }}
              >
                Cycle day 12
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#1A1A1A",
                }}
              >
                Follicular Phase
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 14,
                    color: "#792A64",
                    textDecorationLine: "underline",
                  }}
                >
                  Find out more
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: "#1A1A1A",
                borderRadius: 12,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  fontFamily: "Cambria",
                  fontSize: 16,
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                Tracked Workout
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 14,
                  color: "#B0B0B0",
                }}
              >
                Lower 🦵🏾 body • 45 min
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                padding: 16,
                borderWidth: 1,
                borderColor: "#E5E5E5",
              }}
            >
              <Text
                style={{
                  fontFamily: "Cambria",
                  fontSize: 16,
                  color: "#1A1A1A",
                  marginBottom: 8,
                }}
              >
                Tracked Symptoms
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 14,
                  color: "#1A1A1A",
                }}
              >
                Energy: High • Sleep: 8 hours • Mood: Happy
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
