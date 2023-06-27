export default function returnHowManyArguments(...args) {
  let count = 0;
  for(let i in args) {
    count += 1;
  }
  return(count);
}
