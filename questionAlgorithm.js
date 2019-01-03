//creation of a student object, that includes the various curriculum headings

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
    }
};

let markTarrant = new student("Mark Tarrant");

//algorithm that creates an array from which future questions can be selected
function curriculumArray(obj) {
    let array = []; 
    //creates a demo object to make sure the original object is not changed
    let demoObject = JSON.parse(JSON.stringify(obj)); 
    //iterates through each key in the student.curriculum object and creates an array based on the value assigned to each key
    for (var property in demoObject) {
        while (demoObject[property] >= 1) {
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
        ["Calculating Question 1", "Calculating Answer 1"],
        ["Calculating Question 2", "Calculating Answer 2"]
    ], 

    3: [
        ["Fractions, Decimals and Percentages Question 1", "Fractions, Decimals and Percentages Answer 1"],
        ["Fractions, Decimals and Percentages Question 2", "Fractions, Decimals and Percentages Answer 2"]
    ], 

    4: [
        ["Ratio and Proportion Question 1", "Ratio and Proportion Answer 1"],
        ["Ratio and Proportion Question 2", "Ratio and Proportion Answer 2"]
    ],

    5: [
        ["Algebra Question 1", "Algebra Answer 1"],
        ["Algebra Question 2", "Algebra Answer 2"]
    ],

    6: [
        ["Measurement Question 1", "Measurement Answer 1"],
        ["Measurement Question 2", "Measurement Answer 2"]
    ],

    7: [
        ["Geometry Question 1", "Geometry Answer 1"],
        ["Geometry Question 2", "Geometry Answer 2"]
    ],

    8: [
        ["Statistics Question 1", "Statistics Answer 1"],
        ["Statistics Question 2", "Statistics Answer 2"]
    ]
};

let randomIndex; 

//function which randomly selects a question based on the student object which keeps track of the number of questions answered correctly
function question() {
    let length = questionObject[categoryKey].length - 1;
    randomIndex = Number((Math.random() * length).toFixed());
    let question = questionObject[categoryKey][randomIndex][0];
    console.log(question);
    //console.log(randomIndex);
    return question;
}

//change question state based on answer of question
function questionStateFunction() {
    question();
    let correctanswer = questionObject[categoryKey][randomIndex][1];
    if(correctanswer !== answer1) {
        markTarrant.curriculum[categoryKey] *= 2; 
    } else if (correctanswer == answer1 && markTarrant.curriculum[categoryKey] >= 2) {
        markTarrant.curriculum[categoryKey] /= 2
    } else markTarrant.curriculum[categoryKey] == 1; 

    console.log(markTarrant.curriculum);
}



//user input value stored
let answer1 = 30;

questionStateFunction();
console.log(curriculumArray(markTarrant.curriculum));




//To do list 
//everything works, need to work on remembering state, i.e. stop everything re-setting each time, this may just need multiple tests. 
//may need to write extensive tests as this re-sets every time
//could potentially go back and clean up global objects, putting them in a single reference object