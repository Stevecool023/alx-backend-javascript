// 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Your asynchronous API call or other asynchronous operations go here
    // For example:
    setTimeout(() => {
      const data = "Response from the API"; // Replace this with your actual API response
      resolve(data);
      // or if there's an error:
      // reject(new Error("Failed to get response from the API"));
    }, 1000); // Simulating an asynchronous operation with setTimeout
  });
}

export default getResponseFromAPI;
