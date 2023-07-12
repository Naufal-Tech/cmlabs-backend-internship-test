function isPalindrome(word) {
  // Konvert semua kata ke lowercase dan hapus semua yang bukan huruf (punctuation) atau clean initial state
  const filteredWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Declare variable menggunakan method untuk mengecek apakah palindrome (spli jadikan array, balik lalu sambung lagi jadi string)
  const reversedWord = filteredWord.split("").reverse().join("");

  // Check kata setelah dibersihkan apakah ada length, kalau tidak ada maka return false
  if (filteredWord.length === 0 || /^\s*$/.test(filteredWord)) {
    return false;
  }

  // Compare insial state yang telah dibersihkan dengan kata yang telah balikan, cek apakah cocok
  return filteredWord === reversedWord;
}

// Eksekusi functionnya
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("")); // false
console.log(isPalindrome("hai")); // false

// Checking palindrom in array:

function arePalindromes(words) {
  const palindromes = [];

  // looping
  for (let word of words) {
    const filteredWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedWord = filteredWord.split("").reverse().join("");

    // jika sama balikan lagi ke array kosong palindrome
    if (filteredWord === reversedWord) {
      palindromes.push(word);
    }
  }

  return palindromes;
}

// Eksekusi functionnya
const words = ["radar", "hello", "level", "world", "madam"];
console.log(arePalindromes(words)); // ['radar', 'level', 'madam']
