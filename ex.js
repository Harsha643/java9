// 1. Scenario: Online Library Membership
// ---------------------------------------
// Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:

// Basic Membership: Access to only free books.

// Standard Membership: Access to free books and discounted paid books.

// Premium Membership: Access to all books, including exclusive content.

// Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.

let membership="Premium Membership"

if(membership== "basic membership"){
    console.log("Access to only free books")

}
else if (membership=="standard membership"){
    console.log("Access to free books and discounted paid books");
}
else if(membership=="Premium Membership") {

    console.log("Access to all books, including exclusive content")
}
else{
    console.log("the membership type is invalid")
}

// 2. Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

// Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

// VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

// Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.

let customer="VIP customer";
Amount=561;

if((Amount>=1 &&Amount<=100)&& customer=="regular customer"){
    console.log("no discount");
    
}
else if((Amount>=100 && Amount<=500) && customer=="regular customer"){
    Amount=Amount-Amount*5/100;
    console.log(`after 5% discount for purchases b/w 100 and 500 : ${Amount}`)

}
else if(Amount >500 && customer=="regular customer"){
    Amount=Amount-Amount*0.1;
    console.log(`After 10% discount for purchases above 500 : ${Amount}`)

}
else if (Amount <100 && customer=="VIP customer"){
    Amount=Amount-Amount*0.1
    console.log(Amount);
  
    
}
else if ((Amount>=100 && Amount<=500) && customer=="VIP customer"){
    Amount=Amount-Amount*0.15
    console.log(Amount);
  
    
}
else if (Amount >500 && customer=="VIP customer"){
    Amount=Amount-Amount*0.2
    console.log(Amount);
  
    
}
else{
    console.log("Any think  not is purchases ")
}



// 3. Scenario: Academic Scholarship Eligibility
// ----------------------------------------------
// Context: A university offers scholarships to students based on their GPA and extracurricular involvement:

// Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

// Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

// Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

// Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, 
// use conditional statements to determine which scholarships the student is eligible for. 
// Consider scenarios where a student qualifies for multiple scholarships or none.

let GPA =2.5;
let ECA =1;
let hours=223;
if(GPA >=3.0 && ECA>=2){
    console.log(" this person is eligble for Leadership Scholarship");
    
}
else if(GPA >=2.5 && hours>=100){
    console.log(" this person is eligble for Community Service Scholarship")
}
else if(GPA >= 3.5) {
    console.log(" this person is elible for Merit-Based Scholarship");
}
else{
    console.log("not eligble for any scholarship ")
}

// 4. Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:

// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

// Weekends: Standard price of $15. Seniors and children receive a 30% discount.

// Question: Assume you have variables for the day of the week and the customer’s age.
//  Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.
var age=12;
var dayOfWeek="weekdays";
if ((age>=1 && age<12)&& dayOfWeek=="weekdays" ){
    StdPrice=12;
    StdPrice=StdPrice-StdPrice*0.5
console.log(`this person age is lessthan 12 so 50% discount,After Discount price : ${StdPrice}rs`)
  
}
else if ((age>=12 && age<=65)&& dayOfWeek=="weekdays" ){
    StdPrice=12;
console.log(`this person age is above 11 price is: ${StdPrice}rs `)
  
}
else if ((age>=1 && age<65)&& dayOfWeek=="weekends" ){
    StdPrice=15
    StdPrice=StdPrice-StdPrice*0.3
console.log(`this weekend days are discount 30%: ${StdPrice}rs `)
  
}
else{
  console.log("somethink is worng")
}


// 5. Scenario: Event Registration Validation
// -------------------------------------------
// Context: An event registration system needs to validate user inputs before confirming their registration:

// The user must be 18 years or older to register.

// The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

// The user must provide a valid email address.

// Question: You have variables for the user’s age, the number of participants already registered,
//  and their email address. Use conditional statements to validate whether the user can register for the event.
//   Think about how to handle cases where some or all conditions are not met.

var age =17;
EP=10;
Email="emailasd5@gmail.com"

if ((age>=18 && EP<=100)&&Email=="emailasd5@gmail.com"){

    console.log("register now")

}
else if (EP>100 ){
console.log(`this event is full, no more registrations are accepted.`)

}
else if(age<=17){
    console.log("not eligble for registeration ")
}
else{
    console.log("enter valid email address")
}

