export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if(promise === Promise.resolve()) {
      resolve({status:200, body: success});
  } else {
      reject(new Error(""));
  }
}).then((res) => {console.log("Got a response from the API");}, (err) => {console.log("Got a response from the API");});
}
