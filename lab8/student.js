function Student(firstname = 'Default', lastname = 'Default', grades = []) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverage = function () {
    return this.grades.reduce((acc, g) => acc + g, 0) / this.grades.length;
}



const student1 = new Student('John', 'Smith');
student1.inputNewGrade(90);
student1.inputNewGrade(85);
console.log(student1.computeAverage()); // Outputs: 87.5

const student2 = new Student('Edward', 'David');
student2.inputNewGrade(95);
student2.inputNewGrade(100);
console.log(student2.computeAverage()); // Outputs: 97.5