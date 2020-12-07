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
  console.log('instantiatesWithText')
  assert.toEqual(note.getText(), 'text')
}

instantiatesWithText();

// note-list-model.js

function instantiatedNoteListObject() {
  var assert = new Assert();
  var noteList = new NoteList();
  console.log('instantiatedNoteListObject')
  assert.isTrue(typeof noteList == 'object')
}

instantiatedNoteListObject();

function instantiatedWithEmptyArray() {
  var assert = new Assert();
  var noteList = new NoteList();
  console.log('instantiatedWithEmptyArray')
  assert.toEqual(noteList.listNotes(), Array.isArray())
}

instantiatedWithEmptyArray();
