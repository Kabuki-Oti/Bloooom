import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Bell, User } from "lucide-react-native";
import { useState } from "react";

export default function Profile() {
  const insets = useSafeAreaInsets();
  const [notifications, setNotifications] = useState({
    periodStarting: true,
    periodDue: true,
    periodLate: true,
    fertileWindow: true,
    trackingReminder: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
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
            style={{ fontFamily: "Cambria", fontSize: 28, color: "#1A1A1A" }}
          >
            Profile
          </Text>
        </View>

        {/* User Info */}
        <View style={{ alignItems: "center", paddingVertical: 32 }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#F7A8C8",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <User size={48} color="#FFFFFF" />
          </View>
          <Text
            style={{
              fontFamily: "Cambria",
              fontSize: 24,
              color: "#1A1A1A",
              marginBottom: 4,
            }}
          >
            Kabuki
          </Text>
          <Text
            style={{ fontFamily: "Alegreya", fontSize: 16, color: "#792A64" }}
          >
            she/her
          </Text>
        </View>

        {/* Notifications Section */}
        <View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Bell size={24} color="#792A64" />
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 22,
                color: "#1A1A1A",
                marginLeft: 8,
              }}
            >
              Notifications & Reminders
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#E5E5E5",
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: "#1A1A1A",
                }}
              >
                Period starting soon
              </Text>
              <Switch
                value={notifications.periodStarting}
                onValueChange={() => toggleNotification("periodStarting")}
                trackColor={{ false: "#B0B0B0", true: "#F7A8C8" }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#E5E5E5",
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: "#1A1A1A",
                }}
              >
                Period due
              </Text>
              <Switch
                value={notifications.periodDue}
                onValueChange={() => toggleNotification("periodDue")}
                trackColor={{ false: "#B0B0B0", true: "#F7A8C8" }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#E5E5E5",
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: "#1A1A1A",
                }}
              >
                Period late
              </Text>
              <Switch
                value={notifications.periodLate}
                onValueChange={() => toggleNotification("periodLate")}
                trackColor={{ false: "#B0B0B0", true: "#F7A8C8" }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#E5E5E5",
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: "#1A1A1A",
                }}
              >
                Fertile window soon
              </Text>
              <Switch
                value={notifications.fertileWindow}
                onValueChange={() => toggleNotification("fertileWindow")}
                trackColor={{ false: "#B0B0B0", true: "#F7A8C8" }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: "Alegreya",
                  fontSize: 16,
                  color: "#1A1A1A",
                }}
              >
                Tracking reminder
              </Text>
              <Switch
                value={notifications.trackingReminder}
                onValueChange={() => toggleNotification("trackingReminder")}
                trackColor={{ false: "#B0B0B0", true: "#F7A8C8" }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        {/* Premium Card */}
        <View style={{ paddingHorizontal: 20, marginBottom: 32 }}>
          <View
            style={{
              backgroundColor: "#792A64",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 22,
                color: "#FFFFFF",
                marginBottom: 8,
              }}
            >
              Upgrade to Premium
            </Text>
            <Text
              style={{
                fontFamily: "Alegreya",
                fontSize: 15,
                color: "#FFFFFF",
                marginBottom: 20,
                lineHeight: 22,
              }}
            >
              Get 4-cycle predictions, advanced analytics, and exclusive content
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
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
