import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ChevronLeft, Plus } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function TrackWorkout() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const templates = [
    { id: 1, name: "Lower 🦵🏾 body", exercises: 4 },
    { id: 2, name: "Upper 💪🏾 body 1", exercises: 5 },
    { id: 3, name: "Upper 💪🏾 body 2", exercises: 5 },
    { id: 4, name: "Glutes 🍑", exercises: 4 },
    { id: 5, name: "Full 🧍🏾‍♀️ body", exercises: 3 },
  ];

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
          Track Workout
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          {/* Quick Actions */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/workout/new")}
            style={{
              backgroundColor: "#F7A8C8",
              borderRadius: 16,
              padding: 20,
              marginBottom: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
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
              Log a workout
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/workout/new")}
            style={{
              backgroundColor: "#1A1A1A",
              borderRadius: 16,
              padding: 20,
              marginBottom: 32,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
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
              Quick start an empty workout
            </Text>
          </TouchableOpacity>

          {/* My Templates */}
          <Text
            style={{
              fontFamily: "Cambria",
              fontSize: 22,
              color: "#1A1A1A",
              marginBottom: 16,
            }}
          >
            My Templates
          </Text>

          <View style={{ gap: 12 }}>
            {templates.map((template) => (
              <TouchableOpacity
                key={template.id}
                onPress={() => router.push(`/(tabs)/workout/${template.id}`)}
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
                    fontSize: 18,
                    color: "#1A1A1A",
                    marginBottom: 4,
                  }}
                >
                  {template.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "Alegreya",
                    fontSize: 14,
                    color: "#792A64",
                  }}
                >
                  {template.exercises} exercises
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Example Templates */}
          <Text
            style={{
              fontFamily: "Cambria",
              fontSize: 22,
              color: "#1A1A1A",
              marginTop: 32,
              marginBottom: 8,
            }}
          >
            Example templates
          </Text>
          <Text
            style={{
              fontFamily: "Georgia",
              fontSize: 14,
              color: "#792A64",
              marginBottom: 16,
            }}
          >
            from the ShEO herself
          </Text>

          <View style={{ gap: 12 }}>
            {templates.map((template) => (
              <TouchableOpacity
                key={`example-${template.id}`}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  padding: 20,
                  borderWidth: 2,
                  borderColor: "#F7A8C8",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Cambria",
                    fontSize: 18,
                    color: "#1A1A1A",
                    marginBottom: 4,
                  }}
                >
                  {template.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "Alegreya",
                    fontSize: 14,
                    color: "#792A64",
                  }}
                >
                  {template.exercises} exercises
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
