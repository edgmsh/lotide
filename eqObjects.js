const eqObjects = function(object1, object2) {
  for (let p1 in object1) {
    if (Object.prototype.hasOwnProperty.call(object1,p1)) {
      if (object1[p1] !== object2[p1]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
        return;
      }
    }
  }
  for (let p2 in object2) {
    if (Object.prototype.hasOwnProperty.call(object2,p2)) {
      if (object1[p2] !== object2[p2]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${'object1'} !== ${'object2'}`);
        return;
      }
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${object1} === ${'object2'}`);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
