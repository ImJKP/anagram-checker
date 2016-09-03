function checkAnagrams() {
// Check if two strings are anagrams.

  var firstString = prompt("What's the first string?");
  var secondString = prompt("What's the second string?");

  if (firstString.toLowerCase() == secondString.toLowerCase()) { alert("Those strings are the same!");
  } else {

    var simplify = function(string) {
      return string.toLowerCase().split('').sort().join()
    }

    if ( simplify(firstString) === simplify(secondString) ) {
        alert("Those strings are anagrams!")
      } else {
        alert("Those strings are NOT anagrams!")
    }
  }  
}
