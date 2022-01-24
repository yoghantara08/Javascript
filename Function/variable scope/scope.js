// Global scope / window scope
var a = 'globalscope';

// Function scope (variable didalam function hanya bisa diakses oleh function itu sendiri)
// bisa mengakses global scope
function tes() {
  // name conflict (tidak menimpa kalo beda scope = bisa dipake)
  var a = 'a';
  var b = 2;
  alert(a);
  alert(window.a);
}

tes();
alert(a);
