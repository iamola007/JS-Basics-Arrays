const numbers = arrayFromRange(5, 22);

console.log(numbers);

function arrayFromRange(min, max) {
  let range = [];
  for (let i = min; i <= max; i++) {
    range == range.push(i);
  }
  return range;
}
