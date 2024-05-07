// Solution 4
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }, this);
    }

};

group.showList();