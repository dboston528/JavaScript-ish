function repeatString(str, n) {
  if (str.length === 1) {
    console.log(n);
    return n;
  }
  let repeatStringValue = Math.round(n / str.length) + 1;
  let repString = str.repeat(repeatStringValue);
  let sliceString = repString.slice(0, n);
  let aCount = 0;
  for (let i = 0; i < sliceString.length; i++) {
    if (sliceString.charAt(i) === 'a') {
      aCount++;
    }
  }
  console.log(aCount);
  return aCount;
}

// function repeatString(s, n) {
//   var splitString = s.split('');
//   var stringSize = splitString.length;
//   var a = splitString.filter((a) => a == 'a').length;
//   console.log(a);
// }

repeatString('deandre', 10);
