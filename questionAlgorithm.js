//algorithm that creates a student object, that includes the various curriculum headings
//will need to surface a random question, under a question object, check what question that was and their answer
//updated note for a test


function student (name) {
    this.name = name;
};

let curriculumObject = {
    1: "Number and Place Value", 
    2: "Calculating", 
    3: "Fractions, Decimals and Percentages", 
    4: "Ratio and Proportion", 
    5: "Algebra", 
    6: "Measurement", 
    7: "Geometry", 
    8: "Statistics"
}; 

student.prototype = { 
    constructor: student, 
    curriculum: {
        1: 1, 
        2: 1, 
        3: 1, 
        4: 1, 
        5: 1, 
        6: 10, 
        7: 1, 
        8: 1
    }
};

let markTarrant = new student("Mark Tarrant");


//algorithm that creates an array from which future questions can be selected
function curriculumArray(obj) {
    let array = []; 
    let demoObject = obj; 
    for (var property in demoObject) {
        while (demoObject[property] > 0) {
            array.push(property); 
            demoObject[property] -= 1; 
        }
    }
    console.log(array);
    return array; 
}

//uses the above array to select a catory number which can then be looked up using the curriculum object above
function categorySelector(arr) {
    let randomIndex = Number((Math.random() * arr.length).toFixed());
    return arr[randomIndex];
}

let categoryKey = categorySelector(curriculumArray(markTarrant.curriculum));
let category = curriculumObject[categoryKey];

//category is the next category to be questioned, can then use this as the key to select the next question from the question array
console.log(category);



let questionObject = {
    "Number and Place Value": {
        1: "What is 10 multiplied by 3", 
        2: "What is 6 multiplied by 7"
    },

    "Calculating": {

    }, 

    "Fractions, Decimals and Percentages": {

    }, 

    "Ratio and Proportion": {

    }, 

    "Algebra": {

    }, 

    "Measurement": {

    }, 

    "Geometry": {

    }, 

    "Statistics": {

    }


};

let answerObject = {
    "Number and Place Value": {
        1: 30, 
        2: 42
    },

    "Calculating": {

    }, 

    "Fractions, Decimals and Percentages": {

    }, 

    "Ratio and Proportion": {

    }, 

    "Algebra": {

    }, 

    "Measurement": {

    }, 

    "Geometry": {

    }, 

    "Statistics": {
        
    }
};



//To do list 
//need to turn each question object category into an array as opposed to further objects, can then just loop through them and surface a random question
//similar for the answer object
//need to dynamically update the student object based on whether the student answered the question correctly or not


let kathrynWiltshire = new student("Kathryn Wiltshire"); 

//user input value stored
let answer = 30;
let question;


