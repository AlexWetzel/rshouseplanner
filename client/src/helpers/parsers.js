export function toCamelCase(str) {
  let string = str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  })
  return string;
}

export function shortPriceToLong(price) {
  let p = price;
  if (typeof p === 'number'){ 
    p = price.toString();
  }

  let priceLong = p.replace(/([.])(\w)(\w+)/g, function(match, p1, p2, p3) {
    if(match) {
      let decimal = 0;
      if(p1) {
        decimal = p2;        
      }
      switch (p3) {
        case 'k':
          return ','+ decimal + '00';
        case 'm':
          return ','+ decimal + '00,000';
        case 'b':
          return ','+ decimal + '00,000,000';
        default:
          return match;
      }
    }
  });
  return priceLong;
}