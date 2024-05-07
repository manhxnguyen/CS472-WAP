// Solution 5
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function() {
        for(let student of this.students) {
            console.log(this.title + ": " + student);
        }
    }

};

group.showList();