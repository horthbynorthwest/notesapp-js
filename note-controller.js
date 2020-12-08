function changeGreeting(text) {
  var elem = document.getElementById("app").innerHTML = text
  console.log(elem)
}

changeGreeting("Howdy");
