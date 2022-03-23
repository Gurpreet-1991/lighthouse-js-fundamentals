const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  else {
    var ans = length * width;
    return ans;
  }
}
const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  }
  else {
    var ans = (base * height) / 2;
    return ans;
  }
}
const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined;
  }
  else {
    var ans = radius * radius * Math.PI;
    return ans;
  }
}