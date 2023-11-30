export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      // For demonstration purposes, let's resolve the promise with a dummy response
      const response = { data: "Dummy data from API" };
      resolve(response);
    }, 1000); // Simulating a delay of 1 second
  });
}
