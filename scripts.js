var elementsList = [];

(function() {
  elementsList.push(document.getElementById("first"));
  elementsList.push(document.getElementById("secondChange"));
  elementsList.push(document.getElementById("third"));
  elementsList.push(document.getElementById("cvandbiopage"));

})();



// elementsList.forEach(el => {
//     el.classList.add("closed");
// });

function elementClicked(id) {
  var el = this.elementsList.find(x => x.id == id);

  if (el.classList.contains("opened")) {
    el.classList.remove("opened");
    el.classList.add("closed");
  } else {
    this.elementsList.find(sel => {
      if (sel.classList.contains("opened")) {
        sel.classList.add("closed");
        sel.classList.remove("opened");
      }
    });

    el.classList.add("opened");
    el.classList.remove("closed");
  }
}
