export default function toCamelCase(str) {
  let string = str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  })
  console.log(string);
  return string;
}