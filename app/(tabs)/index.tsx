import { Image, StyleSheet } from "react-native";
import z from "zod";
import { Text, View } from "@/components/Themed";
import { useQuery } from "@tanstack/react-query";

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

export default function RateScreen() {
  const dogQuery = useQuery({ queryKey: ["dog"], queryFn: getDog });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate!</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: dogQuery.data?.message }} style={styles.image} />
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
