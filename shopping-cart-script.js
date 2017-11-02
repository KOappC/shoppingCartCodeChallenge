var cost = 0;
var tax = 0;

var groceryItems = {
    item: [
        {
            name: "spinach",
            price: 2
        },
        {
            name: "onion",
            price: 1
        },
        {
            name: "potato",
            price: 2
        },
        {
            name: "chicken",
            price: 4
        },
        {
            name: "beer",
            price: 9
        }
    ]
};

groceryItems.item.forEach(function(item) {
    console.log(item.name + " $" + item.price);
    cost = (cost + item.price);
    tax = (cost * 0.06);
});

console.log("Total before tax = $" + cost + "  Grand total = $" + (cost + tax));

/*

Write a simple shopping list program. We'll build on this in the next lab.
//DONE  1. Create several grocery item objects with properties of name and price.
//DONE  2. Store the grocery item objects in an array.
//DONE  3. Loop through the array and print out the name
                and price on a new line.
//DONE  4. Total up the amount with a label ‘total’.
                Be prepared to demo your work.
//DONE  B. Add a tax to the total amount of the shopping cart.

 */