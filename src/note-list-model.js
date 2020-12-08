'use strict';

class NoteList {
  constructor() {
    this.list = [];
  }

  addNote(note) {
    this.list.push(note)
  }

  listNotes() {
    var returnString = ""
    this.list.forEach((element) => {
      returnString = returnString + (element.text) + " ";
    })
    return returnString
  }

  createNote(text){
    var note = new Note(text);
    this.list.push(note)
  }
}
