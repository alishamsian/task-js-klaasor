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

console.log(isPrime(7))

// new ==> Math.sqrt()


// Create a function that converts time from 24-hour format to 12-hour format.

function convert24to12(time){
  let parts = time.split(':');
  let hour = parseInt(parts[0] , 10);
  let minute = parts[1]
  let period = time <= 2 ? "PM" : "AM"

  if(hour === 0){
    hour = 12
  }else if (hour > 12){
    hour -= 12
  }

  return hour + ":" + minute + " " + period;
}

console.log(convert24to12("13:43"))

// new ==> split , parseInt


