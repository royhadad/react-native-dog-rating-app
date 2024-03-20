import {
  ActivityIndicator,
  Animated,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { RatingButtons } from "./RatingButtons";
import { ratingService } from "@/external_clients/ratingService/ratingService";
import {
  useInvalidateRandomDog,
  useRandomDog,
} from "@/external_clients/dogsService/dogsServiceQueries";
import { useEffect, useRef, useState } from "react";

async function saveRating(dog: string, rating: number) {
  console.log(`Saving rating ${rating} for dog ${dog}`);
  await ratingService.rateDog(dog, rating);
}

export function RatingScreen() {
  const invalidateRandomDog = useInvalidateRandomDog();
  const dogQuery = useRandomDog();

  async function rateDog(dog: string, rating: number) {
    await Promise.all([invalidateRandomDog(), saveRating(dog, rating)]);
  }

  const dogImageOpacityAnimation = useRef(new Animated.Value(0)).current;
  const dogImageOpacityStyle = { opacity: dogImageOpacityAnimation };

  const spinnerOpacityAnimation = useRef(new Animated.Value(1)).current;
  const spinnerOpacityStyle = { opacity: spinnerOpacityAnimation };

  useEffect(
    function animateDogImagesInAndOutOfScreen() {
      if (dogQuery.isFetching) {
        // animate dog image out of screen and spinner in
        Animated.timing(dogImageOpacityAnimation, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(spinnerOpacityAnimation, {
            toValue: 1,
            duration: 250,
            delay: 500,
            useNativeDriver: true,
          }).start();
        });
      } else {
        // animate spinner out and dog image in
        Animated.timing(spinnerOpacityAnimation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(dogImageOpacityAnimation, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }).start();
        });
      }
    },
    [dogQuery.isFetching],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate!</Text>
      <View style={styles.imageContainer}>
        <Animated.View style={[styles.spinner, spinnerOpacityStyle]}>
          <ActivityIndicator color="blue" size="large" />
        </Animated.View>
        {dogQuery.isSuccess && (
          <Animated.Image
            source={{ uri: dogQuery.data.dogURL }}
            style={[styles.image, dogImageOpacityStyle]}
          />
        )}
        {dogQuery.isError && <Text>Error</Text>}
      </View>
      <View>
        <RatingButtons
          onPress={async (rating) => {
            await rateDog(dogQuery.data?.dogURL as string, rating);
          }}
          disabled={dogQuery.isFetching || dogQuery.isError}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    position: "absolute",
  },
  spinner: {
    position: "absolute",
  },
});
