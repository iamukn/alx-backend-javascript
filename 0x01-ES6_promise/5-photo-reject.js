export default function uploadPhoto(fileName) {
  return new Promise((res, rej) => {
    rej(new Error(`${fileName} cannot be processed`));
  });
}
