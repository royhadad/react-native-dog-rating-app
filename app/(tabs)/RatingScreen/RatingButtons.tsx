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
        <View key={rating} style={styles.buttonContainer}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View style={{ gap: -80, justifyContent: "center", height: 150 }}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonContainer: {
    alignItems: "center",
  },
  boneRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  boneImage: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

// <Image source={BONE_IMAGE} style={{ height: 100, width: 100 }} />
// <View style={styles.boneRow}>
//             {new Array(rating).map((_, index) => (
//               <Image
//                 key={index}
//                 source={{ uri: BONE_IMAGE }}
//                 style={styles.boneImage}
//               />
//             ))}
//           </View>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => onPress(rating)}
//             disabled={disabled}
//           >
//             <Text style={styles.buttonText}>{rating}</Text>
//           </TouchableOpacity>
