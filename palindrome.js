var isPalindrome = function (s) {
  // s = 'abca'
  var s_length = s.length; // 4
  var pos = 0;
  //looping through 'abba'
  while (pos <= s.length / 2) {
    // 1 <= 2
    //     0 = a             4 - 0 - 1 = 3 = a true
    //     1 = b             4 - 1 - 1 = 2 = b true
    //     2 = b             4 - 2 - 1 = 1 = b true (LOOP STOPS HERE!)
    if (s[pos] === s[s_length - pos - 1]) {
      pos = pos + 1; // pos = 1
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(''));
// True
console.log(isPalindrome('abba'));
// True
console.log(isPalindrome('abab'));
// False
console.log(isPalindrome('abca'));
// False
console.log(isPalindrome('abcba'));
// True
