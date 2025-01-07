export default (function() {
  function areEqual(a, b, description) {
    if (a == b) {
      console.log(`Passed: ${description}`);
      return true;
    } else {
      console.error(`Failed: ${description}`);
      return false;
    }
  }

  function isTrue(condition, description) {
    if (condition) {
      console.log(`Passed: ${description}`);
      return true;
    } else {
      console.error(`Failed: ${description}`);
      return false;
    }
  }

  return { areEqual, isTrue };
}());