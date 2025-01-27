// 1.Create a function that checks if a number is prime

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));

// new ==> Math.sqrt()

// 2.Create a function that converts time from 24-hour format to 12-hour format.

function convert24to12(time) {
  let parts = time.split(":");
  let hour = parseInt(parts[0], 10);
  let minute = parts[1];
  let period = time <= 2 ? "PM" : "AM";

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
  }

  return hour + ":" + minute + " " + period;
}

console.log(convert24to12("13:43"));

// new ==> split , parseInt

// 3.Write a function that checks if a number is within a specified range.

function isInRange(number, min, max) {
  if (number <= max && number >= min) {
    return true;
  } else {
    return false;
  }
}

console.log(isInRange(12, 10, 11));

// 4.Create a function that calculates Body Mass Index (BMI) and categorizes it based on the input weight and height. The output should indicate whether the result is "Underweight," "Normal weight," "Overweight," or "Obesity."

function calculateBmi(weight, height) {
  // convert cm to m
  if (height > 3) {
    height = height / 100;
  }

  let bmi = weight / (height * height);

  let category;

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

console.log(calculateBmi(100,188))