(function() {
  function testCircleRadiusDefaultsTo10() {
  var assert = new Assert();
  var circle = new Circle();
  console.log('testCircleRadiusDefaultsTo10')
  assert.equality(circle.radius, 10);
};

  testCircleRadiusDefaultsTo10();
})();

  function testCircleRadiusDefaultsTo10IsTrue() {
  var assert = new Assert();
  var circle = new Circle();
  console.log('testCircleRadiusDefaultsTo10IsTrue')
  assert.isTrue(circle.radius === 10);
};

  testCircleRadiusDefaultsTo10IsTrue();

  function testCircleRadiusIsNot20() {
  var assert = new Assert();
  var circle = new Circle();
  console.log('testCircleRadiusIsNot20')
  assert.isFalse(circle.radius === 20);
};

  testCircleRadiusIsNot20();
