// Prompt the user for input
let speed = prompt("Enter the car speed (km/h): ");

// Convert input to a number
speed = Number(speed);

// Calculate the number of demerit points
let demeritPoints = 0;
if (speed < 70) {
  console.log("Ok");
} else {
  demeritPoints = Math.floor((speed - 70) / 5);
  console.log(`Points: ${demeritPoints}`);
  
  // Check if license should be suspended
  if (demeritPoints >= 12) {
    console.log("License suspended");
  }
}
