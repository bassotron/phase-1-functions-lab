const block = 264
const hq = 42

function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
      return distance - 42
  }
    else if (distance < 42) {
        return 42 - distance
    }
}

function distanceFromHqInFeet(feet) {
  if (feet > 42) {
    return (feet - 42) * 264
}
  else if (feet < 42) {
      return (42 - feet) * 264
  } 
}

function distanceTravelledInFeet(start, destination) {
    
    if (start < destination) {
     return (destination - start) * 264

     }
    else if (start > destination)  {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    let price = .02
        if (distance < 400) {
        return 0
    }
       else if (distance <= 2000 &&  distance > 400) {
           return (distance - 400) * price
    }
      else if (distance > 2000 &&  distance < 2500) {
         return 25

}
     else if (distance >= 2500) {
         return "cannot travel that far"
     }
      
}
