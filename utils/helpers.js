export function calcArrayNumber(start, end) {
   return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
