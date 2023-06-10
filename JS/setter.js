let menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (!mealToCheck || typeof mealToCheck !== "string") {
      console.log(this.mealErrorMsg)
    } else {
      this._meal = mealToCheck;   // set meal but check price
      if (this._price <= 0) {
        console.log("Meal set, now set price")
      } else {
        this.successMsg()          // successMsg as property displays this._meal and this._price as undefined after successful set
      }
    }
  },
  set price(priceToCheck) {
    if (!priceToCheck || typeof priceToCheck !== "number" || priceToCheck <= 0) {
      console.log(this.priceErrorMsg)
    } else {
      this._price = priceToCheck
      if (this._meal === "") {
        console.log("Price set, now set meal")
      } else {
        this.successMsg()
      }
    }
  },
  mealErrorMsg: "Meal was not set correctly!",
  priceErrorMsg: "Price was not set correctly!",
  successMsg() {
    console.log(`Today's Special is ${this._meal} for $${Number(this._price).toFixed(2)}!`)
  }
};

menu.price = "kur";     // error
menu.meal = 1234;     // error
console.log("original:", menu)

menu.meal = "Kyufte";
menu.price = 44;

menu = {
  ...menu,
  _meal: "", _price: 0
}
console.log("reset:", menu)

// NO ERROR - destructuring does not work with set
menu.price = "kur";    
menu.meal = 1234;     

console.log(menu)


