function convert() {
  setTimeout(() => {
    var bobux = document.getElementById("amount").value;
    var dollars = bobux * 420.69;
    document.getElementById("dollarsamount").value = dollars;
    convert();
  }, 500);
}
