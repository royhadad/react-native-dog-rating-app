import { sample } from "lodash";
import { sleepFor500to1000ms } from "@/external_clients/externalClientsUtils";

export class DogsService {
  async getRandomDog(): Promise<{ dogURL: string }> {
    await sleepFor500to1000ms();
    return { dogURL: sample(LIST_OF_DOGS) as string };
  }
}

export const dogsService = new DogsService();

const LIST_OF_DOGS = [
  "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_9040.jpg",
  "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1230.jpg",
  "https://images.dog.ceo/breeds/malinois/n02105162_6220.jpg",
  "https://images.dog.ceo/breeds/schipperke/n02104365_6551.jpg",
  "https://images.dog.ceo/breeds/frise-bichon/2.jpg",
  "https://images.dog.ceo/breeds/leonberg/n02111129_976.jpg",
  "https://images.dog.ceo/breeds/appenzeller/n02107908_7364.jpg",
  "https://images.dog.ceo/breeds/akita/Japaneseakita.jpg",
  "https://images.dog.ceo/breeds/hound-walker/n02089867_3953.jpg",
  "https://images.dog.ceo/breeds/african/n02116738_1627.jpg",
  "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_2970.jpg",
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_13782.jpg",
  "https://images.dog.ceo/breeds/greyhound-italian/n02091032_904.jpg",
  "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_2063.jpg",
  "https://images.dog.ceo/breeds/terrier-american/n02093428_11598.jpg",
  "https://images.dog.ceo/breeds/cattledog-australian/IMG_7506.jpg",
  "https://images.dog.ceo/breeds/greyhound-italian/n02091032_256.jpg",
  "https://images.dog.ceo/breeds/bulldog-boston/n02096585_1295.jpg",
  "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2911.jpg",
  "https://images.dog.ceo/breeds/rottweiler/n02106550_1260.jpg",
  "https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190823_091509.jpg",
  "https://images.dog.ceo/breeds/poodle-miniature/n02113712_347.jpg",
  "https://images.dog.ceo/breeds/papillon/n02086910_3338.jpg",
  "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_2847.jpg",
  "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_5807.jpg",
  "https://images.dog.ceo/breeds/leonberg/n02111129_2088.jpg",
  "https://images.dog.ceo/breeds/sheepdog-english/n02105641_1411.jpg",
  "https://images.dog.ceo/breeds/boxer/n02108089_9076.jpg",
  "https://images.dog.ceo/breeds/chihuahua/n02085620_7.jpg",
  "https://images.dog.ceo/breeds/terrier-sealyham/n02095889_2512.jpg",
  "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_205.jpg",
  "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1862.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_4678.jpg",
  "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1757.jpg",
  "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_1211.jpg",
  "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1847.jpg",
  "https://images.dog.ceo/breeds/vizsla/n02100583_702.jpg",
  "https://images.dog.ceo/breeds/shihtzu/n02086240_3979.jpg",
  "https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg",
  "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1268.jpg",
  "https://images.dog.ceo/breeds/greyhound-italian/n02091032_7838.jpg",
  "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_3663.jpg",
  "https://images.dog.ceo/breeds/basenji/n02110806_4156.jpg",
  "https://images.dog.ceo/breeds/malinois/n02105162_5519.jpg",
  "https://images.dog.ceo/breeds/terrier-border/n02093754_4669.jpg",
  "https://images.dog.ceo/breeds/kelpie/n02105412_6770.jpg",
  "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2474.jpg",
  "https://images.dog.ceo/breeds/cattledog-australian/IMG_7057.jpg",
  "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_2138.jpg",
  "https://images.dog.ceo/breeds/hound-plott/hhh-23456.jpg",
];
