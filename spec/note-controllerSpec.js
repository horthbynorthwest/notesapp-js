'use strict';
// note controller

function instantiatedNoteControllerObject() {
  var assert = new Assert();
  var noteList = new NoteList();
  var notecontroller = new NoteController(noteList);
  console.log('instantiated NoteController Object')
  assert.isTrue(typeof notecontroller == 'object')
}

instantiatedNoteControllerObject();

function NoteControllerCanCreateNote() {
  var assert = new Assert();
  var noteList = new NoteList();
  var notecontroller = new NoteController(noteList);
  console.log('NoteController Can Create Note')
  notecontroller.create('hello')
  assert.toEqual(notecontroller.noteList.listNotes(), 'hello ')
}
NoteControllerCanCreateNote();

function NoteControllerCanHTMLNotes() {
  var assert = new Assert();
  var noteList = new NoteList();
  var notecontroller = new NoteController(noteList);
  console.log('NoteController Can HTML Notes')
  notecontroller.create('Troy & Abed in the morning')
  assert.toEqual(notecontroller.HTML(), '<ul><li><div>Troy & Abed in the morning</div></li></ul>')
}
NoteControllerCanHTMLNotes();
