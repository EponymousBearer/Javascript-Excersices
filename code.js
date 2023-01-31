/*// Question No 2
var name1 = prompt("Enter Your Name")
document.write ("Hello " + name1 + ", Would you like to learn some python today")

// Question NO 3
var name1 = prompt("Enter Your Name")

document.write (name1.toLowerCase() + "<br>")

document.write (name1.toUpperCase() + "<br>")

document.write (name1[0].toUpperCase()+name1.slice(1))

// Question No 4
document.write ('Walt Disney once said, "The way to get started is to quit talking and begin doing."')

// Question No 5
var famous_person = "Walt Disney"
var message = '"The way to get started is to quit talking and begin doing."'
document.write (famous_person + " once said, " + message)

//Question No 6
var name1 = "Muhammad\nAdnan\tNasir"
console.log (name1)

//Question No 7
var a = 2
var b = 6
var c = 10
console.log(a+b)
console.log(c-a)
console.log((c-b)*a)
console.log((b+c)/a)

//Question No 8
console.log (2 + 6)
console.log (3 + 5)
console.log (4 + 4)
console.log (5 + 3)

//Question No 9
var number = 9
console.log ("Wow! " + number + " is my favourite Number")

//Question No 10
// This program is printing my name and date
var name1 = "Adnan"
var date = "\n20/10/2022"
console.log (name1 + date)
*/
// This program works when we remove multiline comments
/*var name2 = "Adnan"
var date2 = "\n20/10/2022"
console.log (name2 + date2)*/
/*
//Question No 11
var friend1 = ["Khalid", "Saud", "Mustufa"]
console.log (friend1[0])
console.log (friend1[1])
console.log (friend1[2])

//Question No 12
var friend1 = ["Khalid", "Saud", "Mustufa"]
var greeting = "Hi "
var greeting2 = ", Hope you are fine."
console.log (greeting + friend1[0] + greeting2)
console.log (greeting + friend1[1] + greeting2)
console.log (greeting + friend1[2] + greeting2)

//Question No 13
var myFavouriteTransportations = ["private plane", "Civic", "Yamaha YBR 125"]
var statement = "I would like to own a "
console.log (statement + myFavouriteTransportations[0])
console.log (statement + myFavouriteTransportations[1])
console.log (statement + myFavouriteTransportations[2])

//Question No 14
var guest = ["Khalid", "Saud", "Abdul Samad", "Basit", "Shamim", "Abdullah"]
var firstMsg = "! I would like to invite you for dinner at my home"
for (let i = 0; i < guest.length; i++) {
    console.log (guest[i] + firstMsg);
}

//Question No 15
var guestList = ["Khalid", "Abdul Samad", "Basit", "Abdullah", "Saud"]

console.log("Guests who can't make it...")

var removeOne = guestList.splice(4, 1 , "Abdul Rafay")

console.log(removeOne)

guestList.splice(4, 1 , "Abdul Rafay")

var secondMsg = "! The list of invited members is changed and you are still invited"
for (let i = 0; i < guestList.length; i++) {
    console.log (guestList[i] + secondMsg);
}

//Question No 16
var guestList = ["Khalid", "Abdul Samad", "Basit", "Abdullah", "Saud"]

var removeOne = guestList.splice(4, 1 , "Abdul Rafay")

guestList.splice(4, 1 , "Abdul Rafay")

var secondMsg = "So, The list of invited members is changed again and you are still invited"

var news = "! I found a bigger dinner table. "

guestList.unshift("Mutaal")

guestList.splice(3 ,0 , "Ghufran")

guestList.push("Zafar")

for (let i = 0; i < guestList.length; i++) {
    console.log (guestList[i] + news +secondMsg);
}

//Question No 17

var guestList = ["Khalid", "Abdul Samad", "Basit", "Abdullah", "Saud"]

var removeOne = guestList.splice(4, 1 , "Abdul Rafay")

guestList.splice(4, 1 , "Abdul Rafay")

var secondMsg = " !You are still invited"

var badNews = "You can invite only two peoples"

guestList.unshift("Mutaal")

guestList.splice(3 ,0 , "Ghufran")

guestList.push("Zafar")

var msg = "! You're sorry you can't invite them to dinner"

var a = guestList.pop()

var b = guestList.pop()

var c = guestList.pop()

var d = guestList.pop()

var e = guestList.pop()

var f = guestList.pop()

console.log (a + msg)
console.log (b + msg)
console.log (c + msg)
console.log (d + msg)
console.log (e + msg)
console.log (f + msg)

for (let i = 0; i < guestList.length; i++) {
    console.log (guestList[i] + secondMsg);
}

var h = guestList.pop()

var z = guestList.pop()

console.log(guestList)

//Question No 18

var locations = ["Burj Khalifa", "Makkah", "Madina", "Statue of liberty", "Hong Kong"]

console.log (locations)

var copyLocations = locations.slice()

var arrangedLocations = copyLocations.sort()

console.log (arrangedLocations)

console.log (locations)

var copyLocations2 = locations.slice()

var arrangedLocations2 = copyLocations2.reverse()

console.log (arrangedLocations2)

console.log (locations)

var reverse1 = locations.reverse()

console.log (reverse1)

var original1 = locations.reverse()

console.log (original1)

var sortedLocations = locations.sort()

console.log (locations)

var sortedLocations = locations.reverse()

console.log (locations)

//Question No 19

var guest = ["Khalid", "Saud", "Abdul Samad", "Basit", "Shamim", "Abdullah"]

var firstMsg = "I am inviting only "

var a = guest.length

console.log (firstMsg + a + " guest")

//Question No 20

var things = ["Afghanistan", "Bengali", "Candyland", "River Sindh", "Mouse"]

//Question No 21

var cnicDetails = {
    name : "Adnan",
    fatherName : "Nasir",
    age : 18,
    address : "Karachi"
}

// Question No 22
//Correct one
var things = ["Afghanistan", "Bengali", "Candyland", "River Sindh", "Mouse"]

console.log (things)

//Error one
var things = ["Afghanistan" + "Bengali" + "Candyland" + "River Sindh" + "Mouse"]

console.log (things)

//Question NO 23

let car = "Honda"

console.log ("Is car == 'Honda'? I predict True.")

console.log (car == "Honda")

let bike = "Yamaha"

console.log ("Is bike == 'Yamaha'? I predict True.")

console.log (bike == "Yamaha")

let computer = "Hp"

console.log ("Is computer == 'Hp'? I predict True.")

console.log (computer == "Hp")

let stationary = "Pencil"

console.log ("Is stationary == 'Pencil'? I predict True.")

console.log (stationary == "Pencil")

let phone = "Realme"

console.log ("Is phone == 'Realme'? I predict True.")

console.log (phone == "Realme")

let website = "Panaverse"

console.log ("Is website == 'panaverse'? I predict False.")

console.log (website == "panaverse")

let marker = "Blue Color"

console.log ("Is marker == 'BlueColor'? I predict False.")

console.log (marker == "BlueColor")

let BulbColor = "whitee"

console.log ("Is BulbColor == 'whitee'? I predict False.")

console.log (BulbColor == "white")

let lock = "open"

console.log ("Is lock == 'close'? I predict False.")

console.log (lock == "close")

let themeOfLight = "ONN"

console.log ("Is themeOfLight == 'Onn'? I predict False.")

console.log (themeOfLight == "Onn")

// Question No 24

//Euality and Inequality of string

let word = "Aplhabets"

if (word == "Aplhabets") {
    console.log(true)
}
else {
    console.log(false)
}

// lower case function

let name1 = "Adnan"

if (name1.toLowerCase() == "Adnan") {
    console.log(true)
}
else {
    console.log(false)
}

// Numerical tests

let num1 = 1

if (num1 == 1) {
    console.log(true)
} else if (num1 > 1) {
    console.log(true)
} else if (num1 < 1) {
    console.log(true)
} else if (num1 > 1) {
    console.log(true)
} else if (num1 <= 1) {
    console.log(true)
} else if (num1 >= 1) {
    console.log(true)
} else
    console.log(false)

// And and Or Operator

let num2 = 5

if (num2 == 2 || num2 > 2) {
    console.log(true)
} else if (num2 < 2 && num2 != 2 ) {
    console.log(false)
} else {
    console.log(null)
}

// Item in array or not

var array = ["orange", "mango", "pineapple", "peach"]

var e = array.includes ("orange");

var f = array.includes ("banana");

console.log(e)

console.log(f)

//Question No 25

//pass player

var alien_color = ["green", "yellow", "red"]

if (alien_color.includes("green")) {
    console.log ("You Earned 5 Points")
}

//fail player
var alien_color = ["yellow", "red"]

if (alien_color.includes("green")) {
    console.log ("You Earned 5 Points")
}

//Question No 26

var alien_color = ["green", "yellow", "red"]

if (alien_color.includes("green")) {
    console.log ("You Earned 5 Points For Shooting The Alien")
} else {
    console.log("You Earned 10 Points")
}

var alien_color = ["green", "yellow", "red"]

if (!alien_color.includes("green")) {
    console.log ("You Earned 5 Points For Shooting The Alien")
} else {
    console.log("You Earned 10 Points")
}

//Question No 27

var alien_color = ["green"]

if (alien_color.includes("green")) {
    console.log ("You Earned 5 Points")
} else if (alien_color.includes("yellow")){
    console.log("You Earned 10 Points")
} else if (alien_color.includes("red")){
    console.log("You Earned 15 Points")
}

var alien_color = ["yellow"]

if (alien_color.includes("green")) {
    console.log ("You Earned 5 Points")
} else if (alien_color.includes("yellow")){
    console.log("You Earned 10 Points")
} else if (alien_color.includes("red")){
    console.log("You Earned 15 Points")
}

var alien_color = ["red"]

if (alien_color.includes("green")) {
    console.log ("You Earned 5 Points")
} else if (alien_color.includes("yellow")){
    console.log("You Earned 10 Points")
} else if (alien_color.includes("red")){
    console.log("You Earned 15 Points")
}

// Question No 28

var age = 2

if (age <= 2 || age < 4) {
    console.log("The person is a baby")    
} else if (age <= 4 || age < 13) {
    console.log("The person is a toddler")    
} else if (age <= 13 || age < 20) {
    console.log("The person is a teenager")    
} else if (age <= 20 || age < 65) {
    console.log("The person is an adult")    
} else if (age <= 65 || age > 65) {
    console.log("The person is an elder")    
}

//Question No 29

var favorite_fruits = ["apple", "mango", "grapes"]

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples")    
} else if (favorite_fruits.includes("mango")) {
    console.log("The person is a mango")    
} else if (favorite_fruits.includes("grapes")) {
    console.log("The person is a grapes")    
} else if (favorite_fruits.includes("banana")) {
    console.log("The person is a banana")    
} else if (favorite_fruits.includes("coconut")) {
    console.log("The person is a coconut")    
}

//Question No 30

var users = ["admin", "adnan",'usman', "ali", "bilal"]
var tr = true
for (let i = 0; i < users.length; i++) {
    if (users.includes("admin")) {
        console.log ("Hello admin, would you like to see a status report?")
    }
    else {
        console.log ("Hello "+users[i]+",thank you for logging in again")
    }
if (tr=false || users.includes("admin"))
    break
else
    continue
}

//Question No 31

var users = []

if (users.length > 0) {
    console.log("We have users")
} else {
    console.log("We need to find some users!")
}

// OR

var users = []
var tr = true
for (let i = 0; i == users.length; i++) {
    if (users.includes("admin")) {
        console.log ("Hello admin, would you like to see a status report?")
    }
    else if (users.length > 0){
        console.log ("Hello "+users[i]+",thank you for logging in again")
    } 
    else if (users.length <= 0) {
        console.log ("We need to find some users")
    }
if (tr=false || users.includes("admin"))
    break
else
    continue
}

//Question No 32

var current_users = ["adnan", "ali", "saddam", "sufyan", "babar"]

var new_users = prompt("Enter")

var a = new_users.toLowerCase()

if (current_users.includes(a)) {
    console.log("Sorry! " + new_users + " is taken")
    console.log(current_users)
} else {
    console.log("Great! " + new_users + " is still available")
    console.log(current_users)
}

// Question No 33
*//*
var ordinal_numbers = [1,2,3,4,5,6,7,8,9]

for (let i = 1; i < ordinal_numbers.length; i++) {
    console.log (ordinal_numbers.indexOf(i,0));
}

//Question No 34

var pizza = ["california", "fagita", "tikka"]

for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
    if (pizza[i].includes("california")) {
        console.log("I like california pizza")
    } else if (pizza[i].includes("fagita")) {
        console.log("I like fagita pizza")
    } else if (pizza[i].includes("tikka")) {
        console.log("I like tikka pizza")
    }
}
console.log("I eat too much pizza\nPizza is a fast food\nPizza hut's pizza is really delicious")
console.log("I really like pizza!")

// Question No 35

var animals = ["cat","dog","cow"]
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    if (animals[i].includes("cat")) {
        console.log("A cat is a cute pet")
    } else if (animals[i].includes("dog")) {
        console.log("A dog would make a great pet")
    } else if (animals[i].includes("cow")) {
        console.log("A cow provides us milk")
    }
}
console.log (animals + " have four legs\nhave tail and\nhave two eyes" )
console.log ("Any of these animals would make a great pet!")

//Question no 36

function make_shirt(a, b) {
    var a = prompt("size")
    var b = prompt("Text on shirt")
    return "Size of " + a + " should be printed " + b + " text";
}
console.log(make_shirt())

//Question no 37

function make_shirt(a, b) {
    var a = prompt("size")
    var b = prompt("Text on shirt")
    if (a == "large")
        console.log("I love javascript")
    else if (a == "medium")
        console.log("This is a medium shirt")
    else if (a == "small")
        console.log("This is a small shirt")
    else 
        console.log("Choose size from small, medium and large")
    return "Size of " + a + " should be printed " + b + " text";
}
console.log(make_shirt())

//Question No 38

var b= "aas"
var a= "aas"
for (let i = 0; i < 3; i++) {
    function describe_city(a, b) {
        var city = prompt("Enter Any City")
        var its_country = prompt("Enter City's Country")
        return city + ' is in ' + its_country;
    }
    console.log (describe_city())
}
/*
//Question No 39

for (let i = 0; i < 3; i++) {
    function city_country(city,its_country) {
        var city = prompt("Enter Any City")
        var its_country = prompt("Enter City's Country")
        return '"' + city + ', ' + its_country + '"';
    }
    console.log (city_country())
}

//Question No 40

for (let i = 0; i < 3; i++) {
    function make_album(,) {
        let music_album = {
            "artist_name" : prompt("Enter Artist Name"),
            "album_name" : prompt("Enter Album Name")
        }
        return music_album;
        }
    console.log (make_album())
}

// Question No 41

var greatMagicians = ["adnan", "khalid"]

for (let i = 0; i < greatMagicians.length; i++) {
    function show_magicians(list1) {
        return greatMagicians[i];
    }
    console.log (show_magicians())
}
*/
// Question No 42

var greatMagicians = ["adnan", "khalid"]

for (let i = 0; i < greatMagicians.length; i++) {
    function show_magicians(list1) {
        return "the great " + greatMagicians[i];
    }
    console.log (show_magicians())
}

// Question No 43

// var a = parseint(prompt("Enter"))
// for (let i = 0; i <= a; i++) {
//     var result = num%i;
//         if (result == 0) {
//             console.log("Number is Not Prime" + num + "I" + i)
//             break
//         } else {
//             console.log("Prime")
//         }
// }

// Question No 45
