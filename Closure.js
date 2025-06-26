function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getValue: function () {
      return count;
    },
  };
}

const counter = createCounter(5);

console.log("getvalue", counter.getValue());
console.log("increment", counter.increment());
console.log("increment", counter.increment());
console.log("decrement", counter.decrement());
console.log("getvalue", counter.getValue());
