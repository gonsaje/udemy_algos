// Explain what a class is:
// - A blueprint for creating objects with predefined properties and methods
// JS doesn't really have classes
// JS is prototypal-based inheritence
// class syntax does not intoriduce a new oo inherience model to JavaScript



// Understand how JS implements the "idea" of classes

// Define terms like abstraction,encapsulation, and polymorphism

// Use es2015 to implement classes

// class Student {
//     constructor(firstName, lastName, year) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.year = year;
//     }


// }

// The method to creat new objects must be called constructor

// The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!

// let firstStudent = new Student("Colt", "Steele", 1);
// let secondStudent = new Student ("Blue", "Steele", 2)

// console.log(firstStudent.year)

// firstStudent.hair = "blonde";

// console.log(firstStudent.hair);

//////////////////////////////////////////////////////////////
// Instance methods => methods that provide functionality that pertains to a single instance
// each instance would have a different output
// "this" refers to to the instance of the class

// class Student {
//     constructor(firstName, lastName, year) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.year = year;
//         this.tardies = 0;
//         this.scores = [];
//     }

//     fullName() {
//         return `Your name is ${this.firstName} ${this.lastName}`;
//     }

//     markLate() {
//         this.tardies++;
//         if (this.tardies >= 3) return 'YOU ARE EXPELLED!!!!'
//         return `${this.firstName} ${this.lastName} has been late ${this.tardies} time(s)`;
//     }

//     addScore(score) {
//         this.scores.push(score);
//         return this.scores;
//     }

//     calculateAvg() {
//         return this.scores.reduce((a,b) =>  a + b);
//     }
// }

// let firstStudent = new Student("Colt", "Steele", 1);
// let secondStudent = new Student ("Blue", "Steele", 2)


// console.log(firstStudent.fullName());
// console.log(" ");
// console.log(firstStudent.tardies);
// console.log( firstStudent.markLate() );
// console.log(" ");
// console.log(firstStudent.tardies);
// console.log( firstStudent.markLate() );
// console.log(" ");
// console.log(firstStudent.tardies);
// console.log(secondStudent.addScore(12));
// console.log(secondStudent.addScore(12));
// console.log(secondStudent.addScore(12));
// console.log(secondStudent.addScore(12));
// console.log(secondStudent.calculateAvg());
//////////////////////////////////////////////////////////////////

// Class Methods: define functionality that is pertinent to classes but not indiv instances

// static -  keyword defines a static method for a clas. Static methods are called without
// instantiating their class and cannot be called through a class instance. Static methods
// are often used to create utility functions for an application
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your name is ${this.firstName} ${this.lastName}`;
    }

    static enrollStudents(...students) {
        return 'enrolling students...'
    }    
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student ("Blue", "Steele", 2)

console.log(Student.enrollStudents([firstStudent, secondStudent]));


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - a.y;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10)

console.log(Point.distance(p1, p2));