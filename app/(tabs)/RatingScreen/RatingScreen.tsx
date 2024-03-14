import { Image, StyleSheet } from "react-native";
import z from "zod";
import { Text, View } from "@/components/Themed";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { RatingButtons } from "./RatingButtons";

const DogSchema = z.object({
  message: z.string(),
  status: z.string(),
});
type Dog = z.infer<typeof DogSchema>;
async function getDog(): Promise<Dog> {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return DogSchema.parse(data);
}

async function saveRating(dog: string, rating: number) {
  console.log(`Saving rating ${rating} for dog ${dog}`);
}

export function RateScreen() {
  const dogQuery = useQuery({ queryKey: ["dog"], queryFn: getDog });
  const queryClient = useQueryClient();

  async function rateDog(dog: string, rating: number) {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ["dog"] }),
      saveRating(dog, rating),
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate!</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: dogQuery.data?.message }} style={styles.image} />
      </View>
      <View>
        <RatingButtons
          onPress={async (rating) => {
            await rateDog(dogQuery.data?.message as string, rating);
          }}
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
  imageContainer: {},
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
