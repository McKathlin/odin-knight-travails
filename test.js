export default (function() {
  function areEqual(a, b, description) {
    if (a === b) {
      if (description) {
        console.log(`Passed: ${description}`);
      }
      return true;
    } else {
      if (description) {
        console.error(`Failed: ${description}`);
      } else {
        throw new Error("Equality test failed");
      }
      return false;
    }
  }

  function isTrue(condition, description) {
    if (condition) {
      if (description) {
        console.log(`Passed: ${description}`);
      }
      return true;
    } else {
      if (description) {
        console.error(`Failed: ${description}`);
      } else {
        throw new Error("Assertion test failed");
      }
      return false;
    }
  }

  return { areEqual, isTrue };
}());