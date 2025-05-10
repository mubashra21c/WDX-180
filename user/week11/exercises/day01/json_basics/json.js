/**
 * 30 Days of JavaScript: JSON exercise
 * 
 * Complete the challenges found below!
 *  */

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];

let age = 250;

let isMarried = true;

const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;


/**
 * Challenges:
 * 1. Change skills array to JSON using JSON.stringify()
 * 2. Stringify the age variable
 * 3. Stringify the isMarried variable
 * 4. Stringify the student object
 * 5. Stringify the students object with only firstName, lastName and skills properties
 * 6. Parse the *txt* JSON to object.
 * 7. Find the user who has many skills from the variable stored in *txt*.
 */

// INSERT YOUR CODE BELOW
//1. Change skills array to JSON using JSON.stringify()
const skillJSON=JSON.stringify(skills,null,2);
console.log(skillJSON);

//* 2. Stringify the age variable
console.log(typeof(age));
const ageJSON=JSON.stringify(age);
console.log(ageJSON);
console.log(typeof(ageJSON));

//* 3. Stringify the isMarried variable
console.log(typeof(isMarried));
const isMarriedJSON=JSON.stringify(isMarried);
console.log(isMarriedJSON);
console.log(typeof(isMarriedJSON));

//4. Stringify the student object
const studentJSON=JSON.stringify(student);
console.log(studentJSON);

// 5. Stringify the students object with only firstName, lastName and skills properties
const studentJSON1=JSON.stringify(student,["firstName","lastName","skills"]);
console.log(studentJSON1);

// 6. Parse the *txt* JSON to object.
const txtObj=JSON.parse(txt);
console.log(txtObj);

// 7. Find the user who has many skills from the variable stored in *txt*.
let max=0;
let maxUser="";
for(let user in txtObj){
    const len=(txtObj[user].skills.length);
   if(len>max){
    max=len;
     maxUser=user;
   }
}
console.log(maxUser);
console.log(`${maxUser} has ${max} skills`);