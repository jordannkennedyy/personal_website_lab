// Constants //

const courseList = [{1620:'Web Fundamental Technologies'}, {1515:'Scripting for IT'}, {1630:'Database Intro'}];

const Web = " ACIT 1620 Web Fundamental Technologies"
const Python = "ACIT 1515 Scripting for IT"
const Database = "ACIT 1630 Intro to Database"

// Main Code //

var question = prompt("Enter a code found on the webpage (must be a 4-digit number ie. 1620):").toString()
valid_entry(question);
checked = course_check(question, courseList);
var x = course_response(checked);
console.log(x)
console.log(courseList)


//Function Definitions

function course_check(question, courseList){
    for (item of courseList){
        for (i in item){
            if (i == question){
                data = question
                return data;
            }
        }
    }
}

function course_response(data){
        if (data == 1620){
        x = `Yes, I am taking the course ${Web}`
        return x
} else if (data == 1515){
        y = `Yes, I am taking the course ${Python}`
        return y
} else if (data == 1630){
        z = `Yes, I am taking the course ${Database}`
        return z
        }
    else{
    new_obj = {}
    let new_key = prompt('Enter a key to be added to course list:')
    let new_val = prompt('Enter a value to be added to new key of course list')
    new_obj[new_key] = new_val
    courseList.push(new_obj)
    x = "Success"
    return x
    }
}

function valid_entry(question){
    if (question.length !== 4){
        prompt("please enter a valid number:")
    }
}





