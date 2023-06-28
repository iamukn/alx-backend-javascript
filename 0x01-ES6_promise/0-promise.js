export default function getResponseFromAPI() {
  const data = new Promise((res, rej) => {
    setTimeout(() => {
      res(2 * 2);
    }, 5000);
  });
  return data.then((res) => console.log(res)).catch((err) => console.err(err));
}
