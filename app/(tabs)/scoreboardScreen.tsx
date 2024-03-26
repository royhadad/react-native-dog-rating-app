import { Button, Image, ScrollView, StyleSheet } from "react-native";

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
      <View style={{ flexGrow: 1 }}>
        {top10RatedDogsQuery.isPending ? (
          <Text>Loading...</Text>
        ) : top10RatedDogsQuery.isError ? (
          <Text>Error: {top10RatedDogsQuery.error.message}</Text>
        ) : (
          <View style={{ width: "100%" }}>
            <Text>Top 10 rated dogs:</Text>
            <ScrollView style={{ width: "100%" }}>
              <View style={{ gap: 10, width: "100%" }}>
                {top10RatedDogsQuery.data.map(
                  ({ dog, numberOfRatings, averageRating }) => (
                    <View
                      key={dog}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "flex-start",
                        gap: 20,
                      }}
                    >
                      <Image
                        source={{ uri: dog }}
                        style={{ width: 70, height: 70, borderRadius: 35 }}
                      />
                      <View>
                        <Text>average: {averageRating}</Text>
                        <Text>rated: {numberOfRatings} times</Text>
                      </View>
                    </View>
                  ),
                )}
              </View>
            </ScrollView>
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
