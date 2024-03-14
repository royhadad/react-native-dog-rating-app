import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export const RatingButtons: React.FC<{ onPress: (rating: number) => void }> = ({
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {[...Array(10).keys()].map((value) => {
        const rating = value + 1;
        return (
          <TouchableOpacity
            key={rating}
            style={styles.button}
            onPress={() => onPress(rating)}
          >
            <Text style={styles.buttonText}>{rating}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    margin: 2,
    width: "28%", // three buttons per row
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
