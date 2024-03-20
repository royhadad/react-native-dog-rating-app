import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const BONE_IMAGE = require("@/assets/images/bone.png");

export const RatingButtons: React.FC<{
  onPress: (rating: number) => void;
  disabled: boolean;
}> = ({ onPress, disabled }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        width: "80%",
      }}
    >
      {[1, 2, 3, 4, 5].map((rating) => (
        <TouchableOpacity
          style={{
            borderColor: "lightgrey",
            borderWidth: 1,
            borderRadius: 20,
            height: 150,
            gap: -40,
            justifyContent: "flex-start",
            flexDirection: "column-reverse",
          }}
          onPress={() => onPress(rating)}
          disabled={disabled}
        >
          {new Array(rating).fill(null).map((_, index) => (
            <Image source={BONE_IMAGE} style={{ height: 60, width: 60 }} />
          ))}
        </TouchableOpacity>
      ))}
    </View>
  );
};
