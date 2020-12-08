'use strict';

// notes.js

function instantiatedNoteObject() {
  var assert = new Assert();
  var note = new Note('text');
  console.log('instantiatedNoteObject')
  assert.isTrue(typeof note == 'object')
}

instantiatedNoteObject();

function instantiatesWithText() {
  var assert = new Assert();
  var note = new Note('text');
  console.log('instantiates With Text')
  assert.toEqual(note.getText(), 'text')
}

instantiatesWithText();

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
  assert.toEqual(noteList.listNotes(), Array.isArray())
}

instantiatedWithEmptyArray();


function pushesANoteIntoArray() {
  var assert = new Assert();
  var note = new Note('hello, there');
  var noteList = new NoteList();
  console.log('pushes A Note Into Array')
  noteList.addNote(note);
  assert.isTrue(noteList.listNotes().length === 1)
}

pushesANoteIntoArray();

function arrayHasPushedNote() {
  var assert = new Assert();
  var note = new Note('hello, there');
  var noteList = new NoteList();
  console.log('array Has Pushed Note')
  noteList.addNote(note);
  console.log(noteList.listNotes()[0])
  assert.toEqual(noteList.listNotes()[0].getText(), 'hello, there')
}

arrayHasPushedNote();

function noteListCanCreateNote() {
  var assert = new Assert();
  var noteList = new NoteList();
  console.log('note List Can Create Note');
  noteList.createNote("I am Obi-Wan");
  console.log(noteList.listNotes()[0])
  assert.toEqual(noteList.listNotes()[0].getText(), "I am Obi-Wan")
}
noteListCanCreateNote();
