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
