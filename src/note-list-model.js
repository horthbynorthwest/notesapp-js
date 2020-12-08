'use strict';

class NoteList {
  constructor() {
    this.list = [];
  }

  addNote(note) {
    this.list.push(note)
  }

  listNotes() {
    // for (var i = 0; i < this.list.length; i++) {
    //   // let note = new Note(text)
    //  this.note.getText(this.list[i]);
    // }
    return this.list;
  }

  createNote(text){
    var note = new Note(text);
    this.list.push(note)
  }
}
