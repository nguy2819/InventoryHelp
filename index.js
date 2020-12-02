let inventory = [
{
candy: "Twizzlers",
inStock: 180,
weeklyAverage: 200,
},
{
candy: "Sour Patch Kids",
inStock: 90,
weeklyAverage: 100,
},
{
candy: "Milk Duds",
inStock: 300,
weeklyAverage: 170,
},
{
candy: "Now and Laters",
inStock: 150,
weeklyAverage: 40,
},
];
// 1. How many candy types do we have?
function howManyCandyTypes(inventory){
  let candyTypes = 0;
  for(i=0; i<inventory.length; i++){
    candyTypes += 1;
  }
  return candyTypes;
}

// 2. How many candies are in stock?
function howManyCandiesInStock(inventory){
  let candiesInStock = 0;
  for (i=0; i<inventory.length; i++){
    candiesInStock += inventory[i].inStock;
  }
return candiesInStock;
}

// 3. Add a new candy to the inventory.
function addANewCandy(inventory, newCandy){
  inventory.push({
    candy: newCandy,
    inStock:0,
    weeklyAverage:0
  });
  return inventory;
}

// 4. Should we order this candy?
function orderOrNot(inventory){
  let answer = [];
  for(i=0; i<inventory.length; i++){
    if(inventory[i].weeklyAverage < inventory[i].inStock){
      answer.push("We should not order this "+ inventory[i].candy);
    } else if(inventory[i].weeklyAverage > inventory[i].inStock){
      answer.push("We should order this "+ inventory[i].candy);
    }
  }
  return answer;
}

// 5. How much of a specified candy should we order this week?
function howMuchToOrder(inventory){
  let howMuch = [];
  for(i=0; i<inventory.length; i++){
    if(inventory[i].weeklyAverage < inventory[i].inStock){
      howMuch.push("We should not order this candy "+ inventory[i].candy);
    } else if(inventory[i].weeklyAverage > inventory[i].inStock){
      howMuch.push("We should order this candy "+ inventory[i].candy +": " + (inventory[i].weeklyAverage - inventory[i].inStock));
    }
  }
  return howMuch;
}

// 6. How many candies should we order in total this week?


function howManyTotalToOrder(inventory){
  let total = 0;
  for(i=0; i<inventory.length; i++){
    if(inventory[i].weeklyAverage > inventory[i].inStock){
      total += (inventory[i].weeklyAverage - inventory[i].inStock);
    }
  }
  return total;
}

// 7
function howMuchForCandy(candy){
  if(candy.weeklyAverage < candy.inStock){
      return "We should not order this candy "+ inventory[i].candy;
  } else if(candy.weeklyAverage > candy.inStock){
    return "We should order this candy "+ inventory[i].candy +": " + (candy.weeklyAverage - candy.inStock);
  }
  return candy.candy + ": just right";
}

function howMuchToOrderTotal(inventory){
  let howMuch = [];
  for(i=0; i<inventory.length; i++){
    howMuch.push(howMuchForCandy(inventory[i]));
  }
  return howMuch;
}

// Tests
howManyCandyTypes(inventory);
howManyCandiesInStock(inventory);
addANewCandy(inventory, "Mars bars");
orderOrNot(inventory);
howMuchToOrder(inventory);
howManyTotalToOrder(inventory);
howMuchToOrderTotal(inventory);