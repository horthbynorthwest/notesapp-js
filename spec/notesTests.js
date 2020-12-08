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

// note-list-view.js

function testNoteListViewStartsEmpty() { 
      let assert = new Assert();
      let noteList = new NoteList(); 
      let noteView = new NoteView(noteList);
      console.log('NoteView starts with no notes in it');
      assert.toEqual(noteView.noteListHTML(), '<ul></ul>')
      ; }
  testNoteListViewStartsEmpty();

   function testNoteListViewWithNotesAdded() { 
      let assert = new Assert(); 
      let noteList = new NoteList(); 
      noteList.createNote('Hello World')
      noteList.createNote('What Up?')
      noteList.createNote('Not much, you?') 
      let noteView = new NoteView(noteList);
      console.log('NoteList can have notes added to it');
      assert.toEqual(noteView.noteListHTML(), '<ul><li><div>Hello World</div></li><li><div>What Up?</div></li><li><div>Not much, you?</div></li></ul>');
 }  
testNoteListViewWithNotesAdded();
