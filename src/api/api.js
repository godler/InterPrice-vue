import rawData from "./data.json";

// This function is meant for simulating api call

export async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rawData);
    }, 200);
  });
}
