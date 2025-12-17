import { Tabs } from "expo-router";
import { Home, Calendar, Plus, BookOpen, User } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderColor: "#E5E5E5",
          paddingTop: 4,
        },
        tabBarActiveTintColor: "#792A64",
        tabBarInactiveTintColor: "#B0B0B0",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Alegreya",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color, size }) => <Calendar color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: "Track",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "#F7A8C8",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -20,
              }}
            >
              <Plus color="#FFFFFF" size={28} />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="bloomverse"
        options={{
          title: "BloomVerse",
          tabBarIcon: ({ color, size }) => <BookOpen color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="track-cycle"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="track-workout"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="workout/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
