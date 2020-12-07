class Assert{
  toEqual(a, b) {
    if (a == b){
        console.log('pass')
    } else {
        throw new Error("test failed: " + a + " is not equal to " + b);
    }
  }
  toNotEqual(a, b) {
    if (a !== b){
        console.log('pass')
    } else {
        throw new Error("test failed: " + a + " is equal to " + b);
    }
  }
  isTrue(a) {
    if (a == true){
      console.log('pass')
    } else {
      throw new Error("test failed: " + a + " is not true");
    }
  }
  isFalse(a) {
    if (a == false){
      console.log('pass')
    } else {
      throw new Error("test failed: " + a + " is not false");
    }
  }
};
