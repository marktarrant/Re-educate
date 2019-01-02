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
    let randomIndex = Number((Math.random() * arr.length).toFixed());
    return arr[randomIndex];
}

let categoryKey = categorySelector(curriculumArray(markTarrant.curriculum));
let category = curriculumObject[categoryKey];

//category is the next category to be questioned, can then use this as the key to select the next question from the question array
console.log(category);

let questionObject = {
    1: {
        1: "What is 10 multiplied by 3", 
        2: "What is 6 multiplied by 7"
    },

    2: {

    }, 

    3: {

    }, 

    4: {

    }, 

    5: {

    }, 

    6: {

    }, 

    7: {

    }, 

    8: {

    }


};

let answerObject = {
    1: {
        1: 30, 
        2: 42
    },

    2: {

    }, 

    3: {

    }, 

    4: {

    }, 

    5: {

    }, 

    6: {

    }, 

    7: {

    }, 

    8: {
        
    }
};



//To do list 
//questionState function is very specific, needs to know what the question is, maybe need to write the question algorithm first
//may need to write extensive tests as this re-sets every time
//need to turn each question object category into an array as opposed to further objects, can then just loop through them and surface a random question
//similar for the answer object
//need to dynamically update the student object based on whether the student answered the question correctly or not


let kathrynWiltshire = new student("Kathryn Wiltshire"); 

//user input value stored
let studentAnswer = 30;
let question = questionObject[1][1];

//change question state based on answer of question
function questionState() {
    if(question == "What is 10 multiplied by 3" && studentAnswer !== 30) {
        markTarrant.questionState[1] += 1; 
    };
}


