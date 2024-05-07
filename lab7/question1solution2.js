// Solution 2
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function() {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student);
        });
    }

};

group.showList();