var array_counter = function (array) {
  return "В массиве находится " + array.length + " элемента! ";
};

var multiply = function (x, y) {
     return `${x} умножить на ${y} равно ${x * y}`;
};

var some_value = 451;


module.exports = {

  array_counter: array_counter,
  multiply: multiply,
  some_value: some_value
};
