class Assert{
  equality(a, b) {
    if (a == b){
        console.log('pass')
    } else {
        console.log('fail')
    }
  }
  isTrue(a) {
    if (a == true){
      console.log('pass')
    } else {
      console.log('fail')
    }
  }
  isFalse(a) {
    if (a == false){
      console.log('pass')
    } else {
      console.log('fail')
    }
  }
};
