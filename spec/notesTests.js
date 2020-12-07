'use strict';

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

//   function testCircleRadiusDefaultsTo10() {
//   var assert = new Assert();
//   var circle = new Circle();
//   console.log('testCircleRadiusDefaultsTo10')
//   assert.toEqual(circle.radius, 10);
// };
//
//   testCircleRadiusDefaultsTo10();
//
//   function testCircleRadiusIsNotEq20() {
//   var assert = new Assert();
//   var circle = new Circle();
//   console.log('testCircleRadiusIsNotEq20')
//   assert.toNotEqual(circle.radius, 20);
// };
//
//   testCircleRadiusIsNotEq20();
//
//
//   function testCircleRadiusDefaultsTo10IsTrue() {
//   var assert = new Assert();
//   var circle = new Circle();
//   console.log('testCircleRadiusDefaultsTo10IsTrue')
//   assert.isTrue(circle.radius === 10);
// };
//
//   testCircleRadiusDefaultsTo10IsTrue();
//
//   function testCircleRadiusIsNot20() {
//   var assert = new Assert();
//   var circle = new Circle();
//   console.log('testCircleRadiusIsNot20')
//   assert.isFalse(circle.radius === 20);
// };
//
//   testCircleRadiusIsNot20();
