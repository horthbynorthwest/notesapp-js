'use strict';

class NoteController {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.createNote('Hot chocolate is the best in the winter');
    this.noteView = new NoteView(this.noteList);
  }

  create(text) {
    this.noteList.createNote(text);
  }

  print(){
     document.getElementById("app").innerHTML = this.noteView.noteListHTML()
  }

}

let a = new NoteController()
a.print();







// function changeGreeting(text) {
//   var elem = document.getElementById("app").innerHTML = text
//   console.log(elem)
// }
//
// changeGreeting("goodbye cruel world!");
