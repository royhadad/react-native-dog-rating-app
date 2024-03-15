// fake it for now, using an in memory DB
const ratings = new Map<string, number[]>(); // dog -> ratings

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const sleepFor500to1000ms = () => sleep(500 + Math.random() * 500); // simulate network latency

export class RatingService {
  async rateDog(dog: string, rating: number) {
    await sleepFor500to1000ms();
    const currentRatings = ratings.get(dog);
    if (currentRatings) {
      currentRatings.push(rating);
    } else {
      ratings.set(dog, [rating]);
    }
  }

  async getDogStats(dog: string): Promise<{
    numberOfRatings: number;
    averageRating: number;
  }> {
    await sleepFor500to1000ms();
    const currentRatings = ratings.get(dog);
    return calculateDogStatsFromRatings(currentRatings);
  }

  async getTopRatedDogs(limit: number): Promise<
    {
      dog: string;
      numberOfRatings: number;
      averageRating: number;
    }[]
  > {
    await sleepFor500to1000ms();
    return Array.from(ratings.entries())
      .map(([dog, ratings]) => {
        const { numberOfRatings, averageRating } =
          calculateDogStatsFromRatings(ratings);
        return { dog, numberOfRatings, averageRating };
      })
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, limit);
  }
}

function calculateDogStatsFromRatings(ratings: number[] | undefined): {
  numberOfRatings: number;
  averageRating: number;
} {
  if (!ratings) {
    return { numberOfRatings: 0, averageRating: 0 };
  }
  const numberOfRatings = ratings.length;
  const averageRating = ratings.reduce((a, b) => a + b, 0) / numberOfRatings;
  return { numberOfRatings, averageRating };
}

export const ratingService = new RatingService();
