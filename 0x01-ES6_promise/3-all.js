/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup () {
  const image = uploadPhoto();
  const user = createUser();

  return Promise.all([image, user]).then((res) => {
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
