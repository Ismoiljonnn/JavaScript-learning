function ticketPrice(age) {
  if (age < 0) {
    return "wrong age"
  } else if (age <= 7) {
    return 0
  } else if (age > 7 && age < 17) {
    return 25000
  } else if (age > 18 && age < 59) {
    return 45000
  } else if (age > 60) {
    return 30000
  } else {
    return "wrong age"
  };
};

let age = -3;
let price = ticketPrice(age);

if (typeof price == "Number") {
  console.log(`${age} yosh: ${price} so'm`)
} else {
  console.log(`${price}`)
}