// Exercise checkSpeed

// Speed Limit = 70
// If car driving below 70 = Ok
// For every 5 mph more = 1 point (until then its ok)
// 12 points = License Suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  let points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log(points, "Points");
}

checkSpeed(71); // Ok
checkSpeed(50); // Ok
checkSpeed(180); // License suspended
checkSpeed(90); // 4 Points
