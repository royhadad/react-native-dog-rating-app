import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const BONE_IMAGE = require("@/assets/images/bone.png");
// inline styles only!

export const RatingButtons: React.FC<{
  onPress: (rating: number) => void;
  disabled: boolean;
}> = ({ onPress, disabled }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
      }}
    >
      {[1, 2, 3, 4, 5].map((rating) => (
        <View key={rating} style={{}}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 150,
                gap: -40,
                justifyContent: "flex-start",
                flexDirection: "column-reverse",
              }}
            >
              {new Array(rating).fill(null).map((_, index) => (
                <Image source={BONE_IMAGE} style={{ height: 60, width: 60 }} />
              ))}
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "lightblue",
                padding: 10,
                borderRadius: 5,
                width: 50,
                height: 50,
              }}
              onPress={() => onPress(rating)}
              disabled={disabled}
            />
          </View>
        </View>
      ))}
    </View>
  );
};
