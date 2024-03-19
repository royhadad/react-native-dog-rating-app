import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { RatingButtons } from "./RatingButtons";
import { ratingService } from "@/external_clients/ratingService/ratingService";
import {
  useInvalidateRandomDog,
  useRandomDog,
} from "@/external_clients/dogsService/dogsServiceQueries";

const emptyImage = require("@/assets/images/transparant_image.png");

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate!</Text>
      <View style={styles.imageContainer}>
        <ActivityIndicator size="large" style={styles.spinner} />
        <Image
          source={{
            uri: dogQuery.isSuccess ? dogQuery.data.dogURL : emptyImage,
          }}
          style={{ ...styles.image, opacity: dogQuery.isSuccess ? 100 : 0 }}
        />
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
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>Hi there!!!</Text>
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
    zIndex: 2,
  },
  spinner: {
    position: "absolute",
    zIndex: 1,
  },
});
