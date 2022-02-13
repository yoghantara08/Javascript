/* Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut
-MDN
*/
/* Closure adalah sebuah function ketika memiliki akses ke paren scope-nya, meskipun pareny scope-nya sudah selesai dieksekusi
-w3school
*/

// Lexical Scope
function init() {
  let nama = 'Gustut'; // local variable

  // Inner Function (Closure*)
  function tampilNama() {
    console.log(nama); // akses ke parent variable
  }
  tampilNama();
}
init();
