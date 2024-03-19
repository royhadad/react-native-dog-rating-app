import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useTop10RatedDogs } from "@/external_clients/ratingService/ratingServiceQueries";

export default function ScoreboardScreen() {
  const top10RatedDogsQuery = useTop10RatedDogs();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scoreboard</Text>
      <Button title={"Refresh"} onPress={() => top10RatedDogsQuery.refetch()} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>This is the scoreboard!</Text>
      <View>
        {top10RatedDogsQuery.isPending ? (
          <Text>Loading...</Text>
        ) : top10RatedDogsQuery.isError ? (
          <Text>Error: {top10RatedDogsQuery.error.message}</Text>
        ) : (
          <View>
            <Text>Top 10 rated dogs:</Text>
            {top10RatedDogsQuery.data.map((dog) => (
              <View key={dog.dog}>
                <Text>{dog.dog}</Text>
                <Text>{dog.averageRating}</Text>
                <Text>{dog.numberOfRatings}</Text>
              </View>
            ))}
          </View>
        )}
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
});
