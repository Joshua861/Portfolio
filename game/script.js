// Starting variables

var money = 0
var perClick = 1
var cps = 0
var specialTimer

// Upgrade Costs

var plus50cCost = 25
var plusHalfCPSCost = 50

// On page load

function pageLoad () {
  document.getElementById('cost1').innerHTML = '$' + plus50cCost
  document.getElementById('money').innerHTML = '$' + abvNum(money)
}

// Abbreviates numbers

function abvNum (num) {
  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'k'
  } else if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(1) + 'm'
  } else if (num >= 1000000000 && num < 1000000000000) {
    return (num / 1000000000).toFixed(1) + 'b'
  } else if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(1) + 't'
  } else {
    return num.toString()
  }
}

// Sets the runEverySecond() function to (obviously) run every second.

var intervalID = window.setInterval(runEverySecond, 500)

// What runs every second

function runEverySecond () {
  money += perClick * cps
  money = Math.round(money) // round to nearest whole number, so you don't get $888.400000000013
  document.getElementById('money').innerHTML = '$' + abvNum(money)
}

// For testing purposes

function cheat () {
  money += 100000 // Adds 100,000 to the money
}

// What happens when the "Click!" button is clicked

function onClick () {
  money += perClick
  document.getElementById('money').innerHTML = '$' + abvNum(money)
  if (money > 500) {
    document.getElementById('plusHalfCPS').classList.remove('invisible')
    document.getElementById('cost2').innerHTML = '$' + abvNum(plusHalfCPSCost)
  }
}

// When the +$0.5 per click upgrade button is pressed

function plus50c () {
  if (money >= plus50cCost) {
    //if you have enough money
    money -= plus50cCost
    document.getElementById('money').innerHTML = '$' + abvNum(money)
    perClick += 0.5
    plus50cCost *= 1.2
    plus50cCost = Math.round(plus50cCost * 10) / 10
    document.getElementById('cost1').innerHTML = '$' + abvNum(plus50cCost)
  } else {
    // if you don't have enough money
    document.getElementById('money').innerHTML = 'TOO POOR!'
  }
}

// When the +0.5 cps upgrade button is pressed

function plusHalfCPS () {
  if (money >= plusHalfCPSCost) {
    //if you have enough money
    money -= plusHalfCPSCost
    document.getElementById('money').innerHTML = '$' + abvNum(money)
    cps += 0.5
    plusHalfCPSCost *= 1.2
    plusHalfCPSCost = Math.round(plusHalfCPSCost * 10) / 10
    document.getElementById('cost2').innerHTML = '$' + abvNum(plusHalfCPSCost)
  } else {
    // if you don't have enough money
    document.getElementById('money').innerHTML = 'TOO POOR!'
  }
}
