export default function getResponseFromAPI() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello World");
    }, 5000);
  });
}
