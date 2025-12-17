import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ChevronLeft, MoreVertical, Plus, Check } from "lucide-react-native";
import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function WorkoutDetail() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [exercises, setExercises] = useState([
    {
      name: "Smith machine Hip thrusts",
      sets: [
        { set: 1, previous: "60kg x 12", kg: "", reps: "", completed: false },
        { set: 2, previous: "60kg x 12", kg: "", reps: "", completed: false },
        { set: 3, previous: "60kg x 12", kg: "", reps: "", completed: false },
        { set: 4, previous: "60kg x 12", kg: "", reps: "", completed: false },
      ],
    },
    {
      name: "45 degree Leg press",
      sets: [
        { set: 1, previous: "100kg x 15", kg: "", reps: "", completed: false },
        { set: 2, previous: "100kg x 15", kg: "", reps: "", completed: false },
        { set: 3, previous: "100kg x 15", kg: "", reps: "", completed: false },
        { set: 4, previous: "100kg x 15", kg: "", reps: "", completed: false },
      ],
    },
  ]);

  const toggleSetComplete = (exerciseIndex, setIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets[setIndex].completed =
      !newExercises[exerciseIndex].sets[setIndex].completed;
    setExercises(newExercises);
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
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={28} color="#1A1A1A" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: "#6BBF82",
            borderRadius: 12,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{ fontFamily: "Cambria", fontSize: 16, color: "#FFFFFF" }}
          >
            Finish
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          {/* Workout Header */}
          <View style={{ marginBottom: 24 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: "Cambria",
                  fontSize: 24,
                  color: "#1A1A1A",
                }}
              >
                Follicular Phase workout
              </Text>
              <TouchableOpacity>
                <MoreVertical size={24} color="#1A1A1A" />
              </TouchableOpacity>
            </View>

            <View style={{ gap: 8 }}>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#792A64",
                }}
              >
                💍 Follicular Phase
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#792A64",
                }}
              >
                📅 December 15, 2025
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 15,
                  color: "#792A64",
                }}
              >
                ⏰ 2:30 PM
              </Text>
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 14,
                  color: "#B0B0B0",
                  marginTop: 4,
                }}
              >
                Last time you did this workout was during ovulation
              </Text>
            </View>
          </View>

          {/* Exercises */}
          {exercises.map((exercise, exerciseIndex) => (
            <View key={exerciseIndex} style={{ marginBottom: 32 }}>
              <Text
                style={{
                  fontFamily: "Cambria",
                  fontSize: 20,
                  color: "#1A1A1A",
                  marginBottom: 16,
                }}
              >
                {exercise.name}
              </Text>

              {/* Table Header */}
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 8,
                  borderBottomWidth: 1,
                  borderBottomColor: "#E5E5E5",
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 13,
                    color: "#792A64",
                    width: 40,
                  }}
                >
                  Set
                </Text>
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 13,
                    color: "#792A64",
                    flex: 1,
                  }}
                >
                  Previous
                </Text>
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 13,
                    color: "#792A64",
                    width: 60,
                  }}
                >
                  kg
                </Text>
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 13,
                    color: "#792A64",
                    width: 60,
                  }}
                >
                  reps
                </Text>
                <View style={{ width: 32 }} />
              </View>

              {/* Sets */}
              {exercise.sets.map((set, setIndex) => (
                <View
                  key={setIndex}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: "#F7F7F7",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Alegreya",
                      fontSize: 16,
                      color: "#1A1A1A",
                      width: 40,
                    }}
                  >
                    {set.set}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Alegreya",
                      fontSize: 14,
                      color: "#B0B0B0",
                      flex: 1,
                    }}
                  >
                    {set.previous}
                  </Text>
                  <TextInput
                    style={{
                      width: 60,
                      height: 36,
                      borderWidth: 1,
                      borderColor: "#E5E5E5",
                      borderRadius: 8,
                      paddingHorizontal: 8,
                      fontFamily: "Alegreya",
                      fontSize: 15,
                      color: "#1A1A1A",
                      textAlign: "center",
                    }}
                    placeholder="-"
                    keyboardType="numeric"
                    value={set.kg}
                  />
                  <TextInput
                    style={{
                      width: 60,
                      height: 36,
                      borderWidth: 1,
                      borderColor: "#E5E5E5",
                      borderRadius: 8,
                      paddingHorizontal: 8,
                      fontFamily: "Alegreya",
                      fontSize: 15,
                      color: "#1A1A1A",
                      textAlign: "center",
                      marginLeft: 8,
                    }}
                    placeholder="-"
                    keyboardType="numeric"
                    value={set.reps}
                  />
                  <TouchableOpacity
                    onPress={() => toggleSetComplete(exerciseIndex, setIndex)}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      borderWidth: 2,
                      borderColor: set.completed ? "#6BBF82" : "#E5E5E5",
                      backgroundColor: set.completed ? "#6BBF82" : "#FFFFFF",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 12,
                    }}
                  >
                    {set.completed && <Check size={16} color="#FFFFFF" />}
                  </TouchableOpacity>
                </View>
              ))}

              {/* Add Set Button */}
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 12,
                  marginTop: 8,
                }}
              >
                <Plus size={18} color="#792A64" />
                <Text
                  style={{
                    fontFamily: "Alegreya",
                    fontSize: 15,
                    color: "#792A64",
                    marginLeft: 4,
                  }}
                >
                  Add set
                </Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* Add Exercise Button */}
          <TouchableOpacity
            style={{
              backgroundColor: "#F7A8C8",
              borderRadius: 16,
              padding: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Plus size={24} color="#FFFFFF" />
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: "#FFFFFF",
                marginLeft: 8,
              }}
            >
              Add exercises
            </Text>
          </TouchableOpacity>

          {/* Cancel Workout Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              alignItems: "center",
              paddingVertical: 16,
            }}
          >
            <Text
              style={{ fontFamily: "Alegreya", fontSize: 16, color: "#E45A68" }}
            >
              Cancel workout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
