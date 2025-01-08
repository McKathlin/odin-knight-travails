export default (function() {
  function pass(description) {
    if (description) {
      console.log(`Passed: ${description}`);
    }
    return true;
  }

  function fail(description) {
    if (description) {
      console.error(`Failed: ${description}`);
    } else {
      throw new Error("Test failed");
    }
    return false;
  }

  function areEqual(a, b, description) {
    if (a === b) {
      return pass(description);
    } else {
      return fail(description);
    }
  }

  function isTrue(condition, description) {
    if (condition) {
      return pass(description);
    } else {
      return fail(description);
    }
  }

  return { areEqual, isTrue, pass, fail };
}());