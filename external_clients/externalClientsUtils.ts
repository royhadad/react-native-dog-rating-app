export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
export const sleepFor500to1000ms = () => sleep(500 + Math.random() * 500); // simulate network latency
