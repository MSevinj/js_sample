// 1.Slice
// ###Task 1
// Create an array of numbers from 1 to 10. Use the `slice` method to extract the first 5 numbers and store them in a new array.
const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers.slice(0,5));

// ### Task 2:
// Given an array of names (`['John', 'Jane', 'Alex', 'Chris', 'Anna']`), extract the middle three names using `slice`.
const names= ['John', 'Jane', 'Alex', 'Chris', 'Anna']
console.log(names.slice(1,4));



// 2.Splice
// ### Task 1:
// Create an array of colors (`['red', 'blue', 'green', 'yellow', 'purple']`). Use `splice` to remove 'green' and 'yellow' and replace them with 'orange' and 'pink'.
const colors=['red', 'blue', 'green', 'yellow', 'purple'];
colors.splice(2,2, 'orange', 'pink')
console.log(colors);

// ### Task 2:
// Given an array of numbers (`[1, 2, 3, 4, 5, 6]`), use `splice` to insert the number 99 between 3 and 4.
const nums=[1, 2, 3, 4, 5, 6]
nums.splice(3,0,99)
console.log(nums);



// 3.Concat
// ### Task 1:
// Merge two arrays, `['apple', 'banana']` and `['cherry', 'date']`, into a single array using `concat`.
const a=['apple', 'banana']
const b=['cherry', 'date']
const combined=a.concat(b)
console.log(combined);

// ### Task 2:
// You have three arrays:
// - `arr1 = [1, 2]`
// - `arr2 = [3, 4]`
// - `arr3 = [5, 6]`
// Combine all three arrays into a single array.
const ary1=[1,2]
const ary2=[3,4]
const ary3=[5,6]
const combinedary=ary1.concat(ary2, ary3)
console.log(combinedary);


// 4. Find
// ### Task 1:
// Given an array of numbers (`[10, 15, 20, 25, 30]`), use the `find` method to return the first number greater than 18.
const ary=[10, 15, 20, 25, 30]
const firstGreat= ary.find(num=>num>18)
console.log(firstGreat)

// ### Task 2:
// You have an array of objects representing users:
// ```jsx
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Alex' },
// ];
// ```
// Use the `find` method to get the user object where the `id` is 2.

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' },]
const user2=users.find(item => item.id === 2);
    console.log(user2)




// 5. Filter**
// ### Task 1:
// Given an array of numbers (`[5, 10, 15, 20, 25]`), use the `filter` method to return all numbers greater than 15.
const array=[5, 10, 15, 20, 25]
const numberGreater=array.filter(num=>num>15);
console.log(numberGreater);


// ### Task 2:
// You have an array of products:
// ```jsx
// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 300 },
// ];
// ```
// Use the `filter` method to find all products with a price greater than or equal to 500.
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },]
    const productPrice=products.filter(product=> product.price >= 500);
    console.log(productPrice);



// 6. Reduce
// ### Task 1:
// Given an array of numbers (`[1, 2, 3, 4, 5]`), use the `reduce` method to calculate the sum of all the numbers.
const numbersum= [1, 2, 3, 4, 5]
const numsum=numbersum.reduce((total, num)=>total+num, 0);
console.log(numsum);

// ### Task 2:
// You have an array of items with quantities:
// ```jsx
// const cart = [
//   { item: 'Book', quantity: 2, price: 10 },
//   { item: 'Pen', quantity: 5, price: 2 },
//   { item: 'Notebook', quantity: 1, price: 5 },
// ];
// ''`
// Use the `reduce` method to calculate the total cost of the cart.
const cart = [
  { item: 'Book', quantity: 2, price: 10 },
  { item: 'Pen', quantity: 5, price: 2 },
  { item: 'Notebook', quantity: 1, price: 5 },]
const totalCart=cart.reduce((total,item)=>total + item.quantity*item.price, 0)
console.log(totalCart)


// Tasks Using `if-else-else if`**
// Task 1: Weather App**
// Write a program to decide what to wear based on the weather:
// - If the temperature is **below 10°C**, suggest wearing a jacket.
// - If the temperature is **between 10°C and 20°C**, suggest wearing a sweater.
// - If the temperature is **above 20°C**, suggest wearing a t-shirt.
let weather=20 //could be done with prompt too
if(temperature=>20){
    console.log("Please wear T-shirt")
}
else if(temperature=>10 && temperature<=20){
    console.log("Please wear a Sweater")
}
else{
    console.log("Please wear a Jacket")
}



// ### **Task 2: User Login**
// Create a program to check user credentials:
// - If the username is **"admin"** and the password is **"1234"**, print "Login Successful".
// - If either the username or the password is incorrect, print "Invalid Credentials".
let name="admin"
let password=1234 //could be done with prompt too
if(name=="admin" && password==1234){
    console.log("Login Successful")
}
else{
    console.log("Invalid Credentials")
}


// ### **Task 3: Number Categorization**
// Write a program to categorize a number:
// - If the number is **greater than 0**, print "Positive".
// - If the number is **less than 0**, print "Negative".
// - If the number is **0**, print "Zer
const numberCategory = 15
if(numberCategory>0){
    console.log("Positive")
}
else if(numberCategory<0){
    console.log("Negative")
}
else{
    console.log("Zero")
}


// Tasks Using `if` with `&&` and `||` Operators**
// ### **Task 1: Driving Eligibility**
// Write a program to check driving eligibility:
// - If the person is **18 years or older** or has a **driver's license**, print "Eligible to Drive".
// - If either condition is not met, print "Not Eligible to Drive"
let age =19;
let driverLicense = "Yes"
if(age>=18 || driverLicense=="Yes"){
    console.log("Eligible to Drive")
}
else{
    console.log("NOT Eligible to Drive")

}



