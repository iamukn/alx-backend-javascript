import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
  const d1 = uploadPhoto();
  const d2 = createUser();
  return Promise.all([d1, d2]).then((res) => {
    console.log(`${res[0]['body']} ${res[1]['firstName']} ${res[1]['lastName']}`)
  })
    .catch((err) => { console.log('Signup system offline') });
}


handleProfileSignup();
