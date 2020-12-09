'use strict';
// note-list-model.js

function instantiatedNoteListObject() {
  var assert = new Assert();
  var noteList = new NoteList();
  console.log('instantiated Note List Object')
  assert.isTrue(typeof noteList == 'object')
}

instantiatedNoteListObject();

function instantiatedWithEmptyArray() {
  var assert = new Assert();
  var noteList = new NoteList();
  console.log('instantiated with empty array')
  assert.toEqual(noteList.list, Array.isArray())
}

instantiatedWithEmptyArray();


function pushesANoteIntoArray() {
  var assert = new Assert();
  var note = new Note('hello, there');
  var noteList = new NoteList();
  console.log('pushes A Note Into Array')
  noteList.addNote(note);
  assert.isTrue(noteList.list.length === 1)
}

pushesANoteIntoArray();

function arrayHasPushedNote() {
  var assert = new Assert();
  var note = new Note('hello, there');
  var noteList = new NoteList();
  console.log('array Has Pushed Note')
  noteList.addNote(note);
  console.log(noteList.listNotes())
  assert.toEqual(noteList.listNotes(), 'hello, there ')
}

arrayHasPushedNote();

function noteListCanCreateNote() {
  var assert = new Assert();
  var noteList = new NoteList();
  console.log('note List Can Create Note');
  // noteList.createNote('hello, there');
  noteList.createNote("I am Obi-Wan");
  console.log(noteList.listNotes())
  assert.toEqual(noteList.listNotes(), "I am Obi-Wan ")
}
noteListCanCreateNote();
