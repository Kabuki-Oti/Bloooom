import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ChevronLeft } from "lucide-react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Calendar } from "react-native-calendars";
import KeyboardAvoidingAnimatedView from "@/components/KeyboardAvoidingAnimatedView";

export default function SignUp() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    height: "",
    heightFeet: "",
    heightInches: "",
    heightUnit: "cm",
    weight: "",
    weightUnit: "kg",
    lastPeriodStart: "",
    periodLength: "5",
    cycleLength: "28",
  });

  const handleContinue = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      router.push("/(tabs)/home");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };

  const canContinue = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "";
      case 2:
        return formData.dateOfBirth !== "";
      case 3:
        if (formData.heightUnit === "ft") {
          return (
            formData.heightFeet.trim() !== "" &&
            formData.heightInches.trim() !== ""
          );
        }
        return formData.height.trim() !== "";
      case 4:
        return formData.weight.trim() !== "";
      case 5:
        return formData.lastPeriodStart !== "";
      case 6:
        return formData.periodLength !== "";
      case 7:
        return formData.cycleLength !== "";
      default:
        return false;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F7A8C8" }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, paddingTop: insets.top }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 16,
          }}
        >
          <TouchableOpacity onPress={handleBack}>
            <ChevronLeft size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Cambria",
              fontSize: 22,
              color: "#FFFFFF",
              marginLeft: 12,
            }}
          >
            Sign Up
          </Text>
        </View>

        {/* Progress dots */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 20,
            gap: 8,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((dot) => (
            <View
              key={dot}
              style={{
                width: dot === step ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  dot === step ? "#FFFFFF" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ padding: 20 }}>
            {/* Step 1: Name */}
            {step === 1 && (
              <KeyboardAvoidingAnimatedView behavior="padding">
                <Text
                  style={{
                    fontFamily: "Alegreya",
                    fontSize: 18,
                    color: "#FFFFFF",
                    marginBottom: 40,
                    lineHeight: 26,
                  }}
                >
                  Let's get to know you better so we can personalise your
                  experience.
                </Text>
                <Text
                  style={{
                    fontFamily: "Cambria",
                    fontSize: 24,
                    color: "#FFFFFF",
                    marginBottom: 16,
                  }}
                >
                  What's your preferred name?
                </Text>
                <TextInput
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 16,
                    padding: 18,
                    fontFamily: "Alegreya",
                    fontSize: 18,
                    color: "#1A1A1A",
                  }}
                  placeholder="Enter your name"
                  placeholderTextColor="#999999"
                  value={formData.name}
                  onChangeText={(text) =>
                    setFormData({ ...formData, name: text })
                  }
                  autoFocus
                />
              </KeyboardAvoidingAnimatedView>
            )}

            {/* Step 2: Date of Birth */}
            {step === 2 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Cambria",
                    fontSize: 24,
                    color: "#FFFFFF",
                    marginBottom: 24,
                  }}
                >
                  When were you born?
                </Text>
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <Calendar
                    onDayPress={(day) => {
                      setFormData({ ...formData, dateOfBirth: day.dateString });
                    }}
                    markedDates={{
                      [formData.dateOfBirth]: {
                        selected: true,
                        selectedColor: "#F7A8C8",
                      },
                    }}
                    maxDate={new Date().toISOString().split("T")[0]}
                    theme={{
                      backgroundColor: "#FFFFFF",
                      calendarBackground: "#FFFFFF",
                      textSectionTitleColor: "#1A1A1A",
                      selectedDayBackgroundColor: "#F7A8C8",
                      selectedDayTextColor: "#FFFFFF",
                      todayTextColor: "#F7A8C8",
                      dayTextColor: "#1A1A1A",
                      textDisabledColor: "#CCCCCC",
                      monthTextColor: "#1A1A1A",
                      textMonthFontFamily: "Cambria",
                      textDayFontFamily: "Alegreya",
                      textDayHeaderFontFamily: "Alegreya",
                      textMonthFontSize: 18,
                      textDayFontSize: 16,
                    }}
                  />
                </View>
              </View>
            )}

            {/* Step 3: Height */}
            {step === 3 && (
              <KeyboardAvoidingAnimatedView behavior="padding">
                <Text
                  style={{
                    fontFamily: "Cambria",
                    fontSize: 24,
                    color: "#FFFFFF",
                    marginBottom: 16,
                  }}
                >
                  What's your height?
                </Text>

                {/* Unit toggle */}
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "rgba(255,255,255,0.3)",
                    borderRadius: 12,
                    padding: 4,
                    marginBottom: 16,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      setFormData({ ...formData, heightUnit: "cm" })
                    }
                    style={{
                      flex: 1,
                      backgroundColor:
                        formData.heightUnit === "cm"
                          ? "#FFFFFF"
                          : "transparent",
                      borderRadius: 8,
                      paddingVertical: 12,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Alegreya",
                        fontSize: 16,
                        color:
                          formData.heightUnit === "cm" ? "#F7A8C8" : "#FFFFFF",
                        fontWeight: "600",
                      }}
                    >
                      cm
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      setFormData({ ...formData, heightUnit: "ft" })
                    }
                    style={{
                      flex: 1,
                      backgroundColor:
                        formData.heightUnit === "ft"
                          ? "#FFFFFF"
                          : "transparent",
                      borderRadius: 8,
                      paddingVertical: 12,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Alegreya",
                        fontSize: 16,
                        color:
                          formData.heightUnit === "ft" ? "#F7A8C8" : "#FFFFFF",
                        fontWeight: "600",
                      }}
                    >
                      ft
                    </Text>
                  </TouchableOpacity>
                </View>

                {formData.heightUnit === "cm" ? (
                  <TextInput
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 16,
                      padding: 18,
                      fontFamily: "Alegreya",
                      fontSize: 18,
                      color: "#1A1A1A",
                    }}
                    placeholder="Enter height in cm"
                    placeholderTextColor="#999999"
                    keyboardType="numeric"
                    value={formData.height}
                    onChangeText={(text) =>
                      setFormData({ ...formData, height: text })
                    }
                    autoFocus
                  />
                ) : (
                  <View style={{ flexDirection: "row", gap: 12 }}>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontFamily: "Alegreya",
                          fontSize: 14,
                          color: "#FFFFFF",
                          marginBottom: 8,
                        }}
                      >
                        Feet
                      </Text>
                      <TextInput
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderRadius: 16,
                          padding: 18,
                          fontFamily: "Alegreya",
                          fontSize: 18,
                          color: "#1A1A1A",
                        }}
                        placeholder="ft"
                        placeholderTextColor="#999999"
                        keyboardType="numeric"
                        value={formData.heightFeet}
                        onChangeText={(text) =>
                          setFormData({ ...formData, heightFeet: text })
                        }
                        autoFocus
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontFamily: "Alegreya",
                          fontSize: 14,
                          color: "#FFFFFF",
                          marginBottom: 8,
                        }}
                      >
                        Inches
                      </Text>
                      <TextInput
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderRadius: 16,
                          padding: 18,
                          fontFamily: "Alegreya",
                          fontSize: 18,
                          color: "#1A1A1A",
                        }}
                        placeholder="in"
                        placeholderTextColor="#999999"
                        keyboardType="numeric"
                        value={formData.heightInches}
                        onChangeText={(text) =>
                          setFormData({ ...formData, heightInches: text })
                        }
                      />
                    </View>
                  </View>
                )}
              </KeyboardAvoidingAnimatedView>
            )}

            {/* Step 4: Weight */}
            {step === 4 && (
              <KeyboardAvoidingAnimatedView behavior="padding">
                <Text
                  style={{
                    fontFamily: "Cambria",
                    fontSize: 24,
                    color: "#FFFFFF",
                    marginBottom: 16,
                  }}
                >
                  What's your weight?
                </Text>

                {/* Unit toggle */}
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "rgba(255,255,255,0.3)",
                    borderRadius: 12,
                    padding: 4,
                    marginBottom: 16,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      setFormData({ ...formData, weightUnit: "kg" })
                    }
                    style={{
                      flex: 1,
                      backgroundColor:
                        formData.weightUnit === "kg"
                          ? "#FFFFFF"
                          : "transparent",
                      borderRadius: 8,
                      paddingVertical: 12,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Alegreya",
                        fontSize: 16,
                        color:
                          formData.weightUnit === "kg" ? "#F7A8C8" : "#FFFFFF",
                        fontWeight: "600",
                      }}
                    >
                      kg
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      setFormData({ ...formData, weightUnit: "lbs" })
                    }
                    style={{
                      flex: 1,
                      backgroundColor:
                        formData.weightUnit === "lbs"
                          ? "#FFFFFF"
                          : "transparent",
                      borderRadius: 8,
                      paddingVertical: 12,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Alegreya",
                        fontSize: 16,
                        color:
                          formData.weightUnit === "lbs" ? "#F7A8C8" : "#FFFFFF",
                        fontWeight: "600",
                      }}
                    >
                      lbs
                    </Text>
                  </TouchableOpacity>
                </View>

                <TextInput
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 16,
                    padding: 18,
                    fontFamily: "Alegreya",
                    fontSize: 18,
                    color: "#1A1A1A",
                  }}
                  placeholder={`Enter weight in ${formData.weightUnit}`}
                  placeholderTextColor="#999999"
                  keyboardType="numeric"
                  value={formData.weight}
                  onChangeText={(text) =>
                    setFormData({ ...formData, weight: text })
                  }
                  autoFocus
                />
              </KeyboardAvoidingAnimatedView>
            )}

            {/* Step 5: Last Period Start */}
            {step === 5 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Cambria",
                    fontSize: 24,
                    color: "#FFFFFF",
                    marginBottom: 24,
                  }}
                >
                  When did your last period start?
                </Text>
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <Calendar
                    onDayPress={(day) => {
                      setFormData({
                        ...formData,
                        lastPeriodStart: day.dateString,
                      });
                    }}
                    markedDates={{
                      [formData.lastPeriodStart]: {
                        selected: true,
                        selectedColor: "#F7A8C8",
                      },
                    }}
                    maxDate={new Date().toISOString().split("T")[0]}
                    theme={{
                      backgroundColor: "#FFFFFF",
                      calendarBackground: "#FFFFFF",
                      textSectionTitleColor: "#1A1A1A",
                      selectedDayBackgroundColor: "#F7A8C8",
                      selectedDayTextColor: "#FFFFFF",
                      todayTextColor: "#F7A8C8",
                      dayTextColor: "#1A1A1A",
                      textDisabledColor: "#CCCCCC",
                      monthTextColor: "#1A1A1A",
                      textMonthFontFamily: "Cambria",
                      textDayFontFamily: "Alegreya",
                      textDayHeaderFontFamily: "Alegreya",
                      textMonthFontSize: 18,
                      textDayFontSize: 16,
                    }}
                  />
                </View>
              </View>
            )}

            {/* Step 6: Period Length */}
            {step === 6 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Cambria",
                    fontSize: 24,
                    color: "#FFFFFF",
                    marginBottom: 24,
                    lineHeight: 32,
                  }}
                >
                  How long does your period usually last?
                </Text>
                <View style={{ gap: 12 }}>
                  {["3", "4", "5", "6", "7"].map((days) => (
                    <TouchableOpacity
                      key={days}
                      onPress={() =>
                        setFormData({ ...formData, periodLength: days })
                      }
                      style={{
                        backgroundColor:
                          formData.periodLength === days
                            ? "#FFFFFF"
                            : "rgba(255,255,255,0.3)",
                        borderRadius: 16,
                        padding: 20,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Alegreya",
                          fontSize: 18,
                          color:
                            formData.periodLength === days
                              ? "#F7A8C8"
                              : "#FFFFFF",
                          fontWeight: "600",
                        }}
                      >
                        {days} days
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Step 7: Cycle Length */}
            {step === 7 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Cambria",
                    fontSize: 24,
                    color: "#FFFFFF",
                    marginBottom: 24,
                    lineHeight: 32,
                  }}
                >
                  How long is your cycle typically?
                </Text>
                <ScrollView style={{ maxHeight: 400 }}>
                  <View style={{ gap: 12 }}>
                    {Array.from({ length: 12 }, (_, i) =>
                      (24 + i).toString(),
                    ).map((days) => (
                      <TouchableOpacity
                        key={days}
                        onPress={() =>
                          setFormData({ ...formData, cycleLength: days })
                        }
                        style={{
                          backgroundColor:
                            formData.cycleLength === days
                              ? "#FFFFFF"
                              : "rgba(255,255,255,0.3)",
                          borderRadius: 16,
                          padding: 20,
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Alegreya",
                            fontSize: 18,
                            color:
                              formData.cycleLength === days
                                ? "#F7A8C8"
                                : "#FFFFFF",
                            fontWeight: "600",
                          }}
                        >
                          {days} days
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Continue Button */}
        <View
          style={{
            padding: 20,
            paddingBottom: insets.bottom + 20,
          }}
        >
          <TouchableOpacity
            onPress={handleContinue}
            disabled={!canContinue()}
            style={{
              backgroundColor: canContinue()
                ? "#FFFFFF"
                : "rgba(255,255,255,0.3)",
              borderRadius: 16,
              padding: 18,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Cambria",
                fontSize: 18,
                color: canContinue() ? "#F7A8C8" : "rgba(255,255,255,0.6)",
                fontWeight: "600",
              }}
            >
              {step === 7 ? "Get Started" : "Continue"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
