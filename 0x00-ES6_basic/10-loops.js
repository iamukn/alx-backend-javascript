export default function appendToEachArrayValue(array, appendString) {
    var count = 0;
    for (var idx of array) {
    array[count] = appendString + idx;
  }

  return array;
}
