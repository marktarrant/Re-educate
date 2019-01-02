//algorithm that creates a student object, that includes the various curriculum headings
//will need to surface a random question, under a question object, check what question that was and their answer

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
        6: 1, 
        7: 1, 
        8: 1
    }, 

    questionState: { 
        1: 0, 
        2: 0, 
        3: 0, 
        4: 0, 
        5: 0, 
        6: 0, 
        7: 0, 
        8: 0
    }
};

let markTarrant = new student("Mark Tarrant");

//algorithm that creates an array from which future questions can be selected
function curriculumArray(obj) {
    let array = []; 
    //creates a demo object to make sure the original object is not changed
    let demoObject = obj; 
    //iterates through each key in the student.curriculum object and creates an array based on the value assigned to each key
    for (var property in demoObject) {
        while (demoObject[property] > 0) {
            array.push(property); 
            demoObject[property] -= 1; 
        }
    }
    return array; 
}

//uses the above array to select a category number which can then be looked up using the curriculum object above
function categorySelector(arr) {
    let length = arr.length - 1; 
    let randomIndex = Number((Math.random() * length).toFixed());
    return arr[randomIndex];
}

//category key is the curriculum category key for main use
let categoryKey = categorySelector(curriculumArray(markTarrant.curriculum));
//console.log(categoryKey);

//category is purely for debugging qualities to let me know what the category is without looking it up
let category = curriculumObject[categoryKey];
//console.log(category);

let questionObject = {
    1:[
        ["What is 10 multiplied by 3", 30],
        ["What is 6 multiplied by 7", 42]
    ],

    2: [
        ["Calculating Question", "Calculating Answer"]
    ], 

    3: [
        ["Fractions, Decimals and Percentages Question", "Fractions, Decimals and Percentages Answer"]
    ], 

    4: [
        ["Ratio and Proportion Question", "Ratio and Proportion Answer"]
    ],

    5: [
        ["Algebra Question", "Algebra Answer"]
    ],

    6: [
        ["Measurement Question", "Measurement Answer"]
    ],

    7: [
        ["Geometry Question", "Geometry Answer"]
    ],

    8: [
        ["Statistics Question", "Statistics Answer"]
    ]
};


let kathrynWiltshire = new student("Kathryn Wiltshire"); 

//user input value stored
let studentAnswer = 30;
let questionTest = questionObject[1][0][0];

//console.log(questionObject[1].length);

//change question state based on answer of question
function questionState() {
    if(questionTest == "What is 10 multiplied by 3" && studentAnswer !== 30) {
        markTarrant.questionState[1] += 1; 
    };
}


//function which randomly selects a question based on the student object which keeps track of the number of questions answered correctly
function question() {
    let length = questionObject[categoryKey].length - 1;
    let randomIndex = Number((Math.random() * length).toFixed());
    let question = questionObject[categoryKey][randomIndex][0];
    console.log(question);
}


question();

//To do list 
//write a function that updates the student curriculum object based on the state object which is goverened by whether the question was answered correclty or not
//change state to 1 if answered incorrectly, which would then double the value in the curriculum object
//change state to 0 if answered correctly, which would then half the value in the curriculum object or set the value to 1 if less than 1
//sync up the state object with the student object curriculum to change whether the question was answered correctly or not
//may need to write extensive tests as this re-sets every time
//need to dynamically update the student object based on whether the student answered the question correctly or not